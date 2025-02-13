import * as sqlite3 from 'sqlite3';
import * as path from 'path';
import * as fs from 'fs';
sqlite3.verbose();
// let db: sqlite3.Database;
function initDB(extensionPath) {
    const dbPath = path.join(extensionPath, 'ext-src', 'extension.db');
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err)
            return console.log(err.message);
        console.log('connected to the database, path: ' + dbPath);
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
function savePreset(name, extensionPath) {
    return new Promise((resolve, reject) => {
        const themePath = path.join(extensionPath, 'themes', 'extensionTheme.json');
        if (!name) {
            console.log('name cannot be empty while saving');
            return;
        }
        try {
            const themeData = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
            const editor = themeData.colors['editor.background'];
            const sidebar = themeData.colors['sideBar.background'];
            const panel = themeData.colors['panel.background'];
            const statusBar = themeData.colors['statusBar.background'];
            const tabs = themeData.colors['editorGroupHeader.tabsBackground'];
            const tokenColors = JSON.stringify(themeData.tokenColors);
            const db = initDB(extensionPath);
            const sql = `
                INSERT INTO presets (name, editorcolor, sidebarcolor, panelcolor, statusbarcolor, tabscolor, tokencolors) VALUES (?, ?, ?, ?, ?, ?, ?);
            `;
            db.run(sql, [name, editor, sidebar, panel, statusBar, tabs, tokenColors], (error) => {
                closeDB(db);
                if (error) {
                    return console.log('error while inserting preset into db: ' + error.message);
                }
                else {
                    resolve();
                }
            });
        }
        catch (error) {
            console.log('failed to read theme data: ' + error.message);
            reject(error);
        }
    });
}
async function getPreset(name, extensionPath) {
    try {
        const db = initDB(extensionPath);
        const sql = 'SELECT * FROM presets WHERE name = ?';
        return await new Promise((resolve, reject) => {
            db.get(sql, [name], (error, row) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(row);
                }
            });
        });
    }
    catch (error) {
        console.log('error while fetching preset with name ' + name + 'from db: ' + error.message);
        throw error;
    }
}
async function getPresets(extensionPath) {
    try {
        const db = initDB(extensionPath);
        const sql = 'SELECT * FROM presets;';
        return await new Promise((resolve, reject) => {
            db.all(sql, (error, rows) => {
                closeDB(db);
                if (error) {
                    reject(error);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }
    catch (error) {
        console.log('error while fetching presets from the db: ' + error.message);
        return [];
    }
}
function closeDB(db) {
    db.close((err) => {
        if (err) {
            console.log('error while closing database: ' + err.message);
        }
        else {
            console.log('database connection closed');
        }
    });
}
export { initDB, closeDB, savePreset, getPresets, getPreset };
//# sourceMappingURL=dbConnector.js.map