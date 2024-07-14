import { initDB, closeDB } from "./dbConnector";
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { Preset } from "./dataObjects";

import { globalExtensionPath } from "./extension";

// let db = initDB()    ;

// TODO: color change below
// editor background
// sidebar background
// panel background
// status bar background
// tabs background
// ...


function applyPreset(preset: Preset) {


    //Workbench colors
    const newColors = {
        'editor.background': preset.editorColor,
        'sideBar.background': preset.sidebarColor,
        'panel.background': preset.panelColor,
        'statusBar.background': preset.statusBarColor,
        'editorGroupHeader.tabsBackground': preset.tabsColor
    };

    //Syntax colors
    const themePath = path.join(globalExtensionPath, 'themes', 'extensionTheme.json');
    const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
    const newTokenColors = {
        "textMateRules": themeData.tokenColors.map((color: string) => JSON.parse(color))
    };
    

    //call to update methods
    updateColorCustomization(newColors);
    updateTokenColorCustomization(newTokenColors);
}
function updateColorCustomization(newColors: { [key: string]: string }) {
    const config = vscode.workspace.getConfiguration();
    
    // Get the current color customizations
    const currentColorCustomizations = config.get<any>('workbench.colorCustomizations') || {};

    // Merge the new colors with the existing ones
    const updatedColorCustomizations = {
        ...currentColorCustomizations,
        ...newColors
    };

    // Update the configuration
    config.update('workbench.colorCustomizations', updatedColorCustomizations, vscode.ConfigurationTarget.Global)
        .then(() => {
            vscode.window.showInformationMessage('Color customizations updated.');
        }, (err) => {
            vscode.window.showErrorMessage(`Failed to update color customizations: ${err.message}`);
        });
}
function updateTokenColorCustomization(newTokenColors: { [key: string]: any }) {
    const config = vscode.workspace.getConfiguration();
    const currentTokenColorCustomizations = config.get<any>('editor.tokenColorCustomizations') || {};
    const updatedTokenColorCustomizations = {
        ...currentTokenColorCustomizations,
        ...newTokenColors
    };

    config.update('editor.tokenColorCustomizations', updatedTokenColorCustomizations, vscode.ConfigurationTarget.Global)
        .then(() => {
            vscode.window.showInformationMessage('Token color customizations updated.');
        }, (err) => {
            vscode.window.showErrorMessage(`Failed to update token color customizations: ${err.message}`);
        });
}



function changeEditor(color: string, context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration();
    // const currentTheme = config.get<string>('workbench.colorTheme');
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');

    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['editor.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    } catch (err) {
        console.log('error while setting editor background: ' + (err as Error).message);
    }
}

function changeSidebar(color: string, context: vscode.ExtensionContext) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['sideBar.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    } catch (err) {
        console.log('error while setting side bar background: ' + (err as Error).message);
    }
}

function changePanel(color: string, context: vscode.ExtensionContext) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['panel.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    } catch (err) {
        console.log('error while setting panel background: ' + (err as Error).message);
    }
}

function changeStatusBar(color: string, context: vscode.ExtensionContext) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['statusBar.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    } catch (err) {
        console.log('error while setting status bar background: ' + (err as Error).message);
    }
}

function changeTabs(color: string, context: vscode.ExtensionContext) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensiontheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        themeData.colors['editorGroupHeader.background'] = color;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    } catch (err) {
        console.log('error while setting status bar background: ' + (err as Error).message);
    }
}

export { changeEditor, changeSidebar, changePanel, changeStatusBar, changeTabs, applyPreset};