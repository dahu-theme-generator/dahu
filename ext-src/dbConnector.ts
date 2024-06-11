import * as sqlite3 from 'sqlite3';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

sqlite3.verbose();

let db: sqlite3.Database;

function initDB(): sqlite3.Database {
    db = new sqlite3.Database(':memory', (err) => {
        if(err) return console.log(err.message);
        console.log('connected to the database rn');
    });
    db.run(`
           CREATE TABLE IF NOT EXISTS presets (
               id INTEGER PRIMARY KEY,
               name TEXT NOT NULL,
               editorcolor TEXT,
               sidebarcolor TEXT,
               panelcolor TEXT,
               statusbarcolor TEXT,
               tabscolor TEXT,
               tokencolors TEXT
           );
        `);
    return db;
}

function savePreset(name: string, context: vscode.ExtensionContext) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensionTheme.json');
    if(!name) {
        console.log('name cannot be empty while saving');
        return;
    }

    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
        const editor = themeData.colors['editor.background'];
        const sidebar = themeData.colors['sidebar.background'];
        const panel = themeData.colors['panel.background'];
        const statusBar = themeData.colors['statusBar.background'];
        const tabs = themeData.colors['editorGroupHeader.tabsBackground'];
        const tokenColors = JSON.stringify(themeData.tokenColors);
        
        const sql = `
            INSERT INTO presets (name, editorcolor, sidebarcolor, panelcolor, statusbarcolor, tabscolor, tokencolors) VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        db.run(sql, [name, editor, sidebar, panel, statusBar, tabs, tokenColors], (err) => {
            if(err) {
                return console.log('error while inserting preset into db: ' + (err as Error).message);
            }
        });

    } catch (err) {
        console.log('failed to read theme data: ' + (err as Error).message);
    }
}

function closeDB() {
    db.close();
}

export {initDB, closeDB};

