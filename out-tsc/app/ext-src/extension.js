import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { savePreset, getPresets, getPreset } from "./dbConnector";
import { generatePalette, getColorPalleteFromImage } from "./colorGenerator";
import { applyPreset } from "./backgroundHighlighting";
let globalExtensionPath;
let currentDahuTheme;
/**
 * Manages webview panels
 */
class WebPanel {
    static { this.viewType = "angular"; }
    static createOrShow(extensionPath) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        // Otherwise, create angular panel.
        if (WebPanel.currentPanel) {
            WebPanel.currentPanel.panel.reveal(column);
        }
        else {
            WebPanel.currentPanel = new WebPanel(extensionPath, column || vscode.ViewColumn.One);
        }
        return WebPanel.currentPanel;
    }
    static updateTitle(extensionPath) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        // Otherwise, create angular panel.
        if (WebPanel.currentPanel) {
            WebPanel.currentPanel.panel.reveal(column);
        }
        else {
            WebPanel.currentPanel = new WebPanel(extensionPath, column || vscode.ViewColumn.One);
        }
        WebPanel.currentPanel.panel.webview.postMessage({
            command: "update-title",
            payload: {
                title: `Hello from ${extensionPath} - ${Date().toString()}`,
            },
        });
    }
    constructor(extensionPath, column) {
        this.disposables = [];
        this.extensionPath = extensionPath;
        this.builtAppFolder = "dist";
        // Create and show a new webview panel
        this.panel = vscode.window.createWebviewPanel(WebPanel.viewType, "My Angular Webview", column, {
            // Enable javascript in the webview
            enableScripts: true,
            // And restrict the webview to only loading content from our extension's `media` directory.
            localResourceRoots: [
                vscode.Uri.file(path.join(this.extensionPath, this.builtAppFolder)),
            ],
        });
        // Set the webview's initial html content
        this.panel.webview.html = this._getHtmlForWebview();
        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programatically
        this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
        // Handle messages from the webview
        this.panel.webview.onDidReceiveMessage((message) => {
            switch (message.command) {
                case "notification":
                    vscode.window.showInformationMessage(message.data.text);
                    vscode.window.showErrorMessage(message.text);
                    return;
            }
        }, null, this.disposables);
        this.panel.webview.onDidReceiveMessage(async (message) => {
            switch (message.command) {
                case 'getPresets':
                    const presets = await getPresets(extensionPath);
                    this.panel.webview.postMessage({ command: 'presets', data: presets });
                    break;
                case 'savePreset':
                    try {
                        await savePreset(message.data.name, extensionPath);
                        vscode.window.showInformationMessage('Preset saved successfully');
                    }
                    catch (error) {
                        vscode.window.showErrorMessage('Error saving preset: ' + error.message);
                    }
                    break;
                case 'applyPreset':
                    console.log('apply preset called');
                    await getPreset(message.data.theme, extensionPath)
                        .then(preset => {
                        applyPreset(preset);
                        vscode.window.showInformationMessage('preset applied: ' + preset.name);
                    })
                        .catch(error => {
                        console.log('error while applyin preset: ' + error.message);
                    });
            }
        }, null, this.disposables);
    }
    dispose() {
        WebPanel.currentPanel = undefined;
        // Clean up our resources
        this.panel.dispose();
        while (this.disposables.length) {
            const x = this.disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }
    /**
     * Returns html of the start page (index.html)
     */
    _getHtmlForWebview() {
        // path to dist folder
        const appDistPath = path.join(this.extensionPath, "dist");
        const appDistPathUri = vscode.Uri.file(appDistPath);
        // path as uri
        const baseUri = this.panel.webview.asWebviewUri(appDistPathUri);
        // get path to index.html file from dist folder
        const indexPath = path.join(appDistPath, "index.html");
        // read index file from file system
        let indexHtml = fs.readFileSync(indexPath, { encoding: "utf8" });
        // update the base URI tag
        indexHtml = indexHtml.replace('<base href="/">', `<base href="${String(baseUri)}/">`);
        return indexHtml;
    }
}
function enableTheme() {
    const config = vscode.workspace.getConfiguration();
    const currentTheme = config.get("workbench.colorTheme");
    config.update("workbench.colorTheme", "Dahu Theme", vscode.ConfigurationTarget.Global);
}
/**
 * Activates extension
 * @param context vscode extension context
 */
export function activate(context) {
    globalExtensionPath = context.extensionPath;
    // console.log("dahu is working...");
    enableTheme();
    const themePath = path.join(globalExtensionPath, 'themes', 'extensionTheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        currentDahuTheme = {
            id: 0,
            name: 'initial-theme',
            editorColor: themeData.colors['editor.background'],
            sidebarColor: themeData.colors['sideBar.background'],
            panelColor: themeData.colors['panel.background'],
            statusBarColor: themeData.colors['statusBar.background'],
            tabsColor: themeData.colors['editorGroupHeader.tabsBackground'],
            tokenColors: JSON.parse(themeData.tokenColors)
        };
    }
    catch (error) {
        console.log('error while creating current theme object: ' + error.message);
    }
    context.subscriptions.push(vscode.commands.registerCommand("dahu.start-webview", () => {
        WebPanel.createOrShow(context.extensionPath);
    }), vscode.commands.registerCommand("dahu.savePreset", async () => {
        const presetName = await vscode.window.showInputBox({ prompt: 'enter ur preset name' });
        if (presetName) {
            try {
                await savePreset(presetName, context.extensionPath);
                console.log('preset saved successfully');
            }
            catch (error) {
                console.error('error saving preset: ' + error.message);
            }
            finally {
                console.log('finally block executed');
            }
        }
        else {
            console.log('the name was null...');
        }
    }), 
    // TODO: remove the following 3 commands, these are just for debugging purposes
    vscode.commands.registerCommand("dahu.showPresets", async () => {
        let presets;
        let names = [];
        try {
            presets = await getPresets(context.extensionPath);
            console.log('presets:');
            presets.forEach(p => console.log(p));
        }
        catch (error) {
            console.error('error while getting presets: ' + error.message);
        }
        const selected = await vscode.window.showQuickPick(names, { placeHolder: 'select a preset' });
        if (selected) {
            vscode.window.showInformationMessage('preset selected: ' + selected);
        }
    }), vscode.commands.registerCommand("dahu.generatePalette", async () => {
        const hextString = await vscode.window.showInputBox({ prompt: 'enter hex string' });
        let palette = [];
        if (hextString) {
            try {
                palette = await generatePalette(hextString);
                console.log('generated palette: ');
                palette.forEach(color => console.log(color));
            }
            catch (error) {
                console.log('ERROR OCCURED: ' + error.message);
            }
        }
    }), vscode.commands.registerCommand("dahu.generateFromImage", async () => {
        const opts = {
            canSelectMany: false,
            openLabel: 'select an image',
            filters: {
                'Images': ['png', 'jpg', 'jpeg']
            }
        };
        const fileUri = await vscode.window.showOpenDialog(opts);
        let palette = [];
        if (fileUri && fileUri[0]) {
            try {
                palette = await getColorPalleteFromImage(fileUri[0]);
                console.log('success, color palette generated from image:');
                palette.forEach(color => console.log(color));
            }
            catch (error) {
                console.log('ERROR OCCURED while generating color palette from image: ' + error.message);
            }
        }
    }));
}
export { globalExtensionPath };
//# sourceMappingURL=extension.js.map