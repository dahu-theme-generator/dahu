import { initDB, closeDB } from "./dbConnector";
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

// let db = initDB();

// TODO: color change below
// editor background
// sidebar background
// panel background
// status bar background
// tabs background
// ...

function changeEditor(color: string, context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration();
    const currentTheme = config.get<string>('workbench.colorTheme');
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

export { changeEditor, changeSidebar, changePanel, changeStatusBar, changeTabs};