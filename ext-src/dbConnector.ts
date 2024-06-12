import * as sqlite3 from 'sqlite3';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { Preset } from './dataObjects';

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
               editorColor TEXT,
               sidebarColor TEXT,
               panelColor TEXT,
               statusBarColor TEXT,
               tabsColor TEXT,
               tokenColors TEXT
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
        db.run(sql, [name, editor, sidebar, panel, statusBar, tabs, tokenColors], (error) => {
            if (error) {
                return console.log('error while inserting preset into db: ' + (error as Error).message);
            }
        });

    } catch (error) {
        console.log('failed to read theme data: ' + (error as Error).message);
    }
}

async function getPresets(): Promise<Preset[]>{
    try {
        const sql = 'SELECT * FROM presets;';
        return await new Promise((resolve, reject) => {
            db.all(sql, (error, rows: Preset[]) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    } catch(error) {
        console.log('error while fetching presets from the db: ' + (error as Error).message);
        return [];
    }
}

function closeDB() {
    db.close();
}

export {initDB, closeDB, savePreset, getPresets};

