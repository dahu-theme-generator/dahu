import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { globalExtensionPath } from "./extension";
// let db = initDB();
// TODO: color change below
// editor background
// sidebar background
// panel background
// status bar background
// tabs background
// ...
function applyPreset(preset) {
    const themePath = path.join(globalExtensionPath, 'themes', 'extensionTheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['editor.background'] = preset.editorColor;
        themeData.colors['sideBar.background'] = preset.sidebarColor;
        themeData.colors['panel.background'] = preset.panelColor;
        themeData.colors['statusBar.background'] = preset.statusBarColor;
        themeData.colors['editorGroupHeader.tabsBackground'] = preset.tabsColor;
        let syntaxScopes = JSON.parse(preset.tokenColors);
        const scopesInJSON = syntaxScopes.map(scope => JSON.stringify(scope));
        themeData.tokenColors = scopesInJSON;
    }
    catch (error) {
        console.log('error while applying preset: ' + error.message);
    }
}
function changeEditor(color, context) {
    const config = vscode.workspace.getConfiguration();
    // const currentTheme = config.get<string>('workbench.colorTheme');
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['editor.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    }
    catch (err) {
        console.log('error while setting editor background: ' + err.message);
    }
}
function changeSidebar(color, context) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['sideBar.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    }
    catch (err) {
        console.log('error while setting side bar background: ' + err.message);
    }
}
function changePanel(color, context) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['panel.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    }
    catch (err) {
        console.log('error while setting panel background: ' + err.message);
    }
}
function changeStatusBar(color, context) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['statusBar.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    }
    catch (err) {
        console.log('error while setting status bar background: ' + err.message);
    }
}
function changeTabs(color, context) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['editorGroupHeader.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    }
    catch (err) {
        console.log('error while setting status bar background: ' + err.message);
    }
}
export { changeEditor, changeSidebar, changePanel, changeStatusBar, changeTabs, applyPreset };
//# sourceMappingURL=backgroundHighlighting.js.map