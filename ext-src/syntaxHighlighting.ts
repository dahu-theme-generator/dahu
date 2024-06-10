import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

// TODO: change colors for:
// classes and interfaces
// enums
// type parameters
// variables
// properties
// decorators & annotations
// functions & methods
// comments
// strings
// keywords
// numbers
// operators

// interface TokenColor {
//     scope: string,
//     settings: { color: string }
// };

let syntaxScopes: { scope: string, settings: { foreground: string } }[] = [
    {
        scope: "class",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "interface",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "enum",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "typeParameter",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "variable",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "property",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "decorator",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "function",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "method",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "comment",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "string",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "keyword",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "number",
        settings: {
            foreground: "#ffffff"
        }
    },
    {
        scope: "operator",
        settings: {
            foreground: "#ffffff"
        }
    },
];

function changeCodeSyntaxColor(color: string, scopeIdx: number, context: vscode.ExtensionContext) {
    const themePath = path.join(context.extensionPath, 'themes', 'extensionTheme.json');
    try {
        const themeData = JSON.parse(fs.readFileSync(themePath, 'utf8'));
        syntaxScopes[scopeIdx].settings.foreground = color;
        const scopesInJson: string[] = syntaxScopes.map(syntaxScope => JSON.stringify(syntaxScope));
        themeData.tokenColors = scopesInJson;
        fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
    } catch(err) {
        console.log('error occured while changing class syntax colors: ' + (err as Error).message);
    }
}

// function changeEnum(color: string, context: vscode.ExtensionContext) {
//     const themePath = path.join(context.extensionPath, 'themes', 'extensionTheme.json');
//     try {
//         const themeData = JSON.parse(fs.readFileSync(themePath, 'utf8'));
//         syntaxScopes[2].settings.foreground = color;
//         const scopesInJson: string[] = syntaxScopes.map(syntaxScope => JSON.stringify(syntaxScope));
//         themeData.tokenColors = scopesInJson;
//         fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
//     } catch(err) {
//         console.log('error occured while changing enum syntax colors: ' + (err as Error).message);
//     }
// }

// function changeTypeParameter(color: string, context: vscode.ExtensionContext) {
//     const themePath = path.join(context.extensionPath, 'themes', 'extensionTheme.json');
//     try {
//         const themeData = JSON.parse(fs.readFileSync(themePath, 'utf8'));
//         syntaxScopes[3].settings.foreground = color;
//         const scopesInJson: string[] = syntaxScopes.map(syntaxScope => JSON.stringify(syntaxScope));
//         themeData.tokenColors = scopesInJson;
//         fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
//     } catch(err) {
//         console.log('error occured while changing type parameter syntax colors: ' + (err as Error).message);
//     }
// }

// function changeVariable(color: string, context: vscode.ExtensionContext) {
//     const themePath = path.join(context.extensionPath, 'themes', 'extensionTheme.json');
//     try {
//         const themeData = JSON.parse(fs.readFileSync(themePath, 'utf8'));
//         syntaxScopes[4].settings.foreground = color;
//         const scopesInJson: string[] = syntaxScopes.map(syntaxScope => JSON.stringify(syntaxScope));
//         themeData.tokenColors = scopesInJson;
//         fs.writeFileSync(themePath, JSON.stringify(themeData, null, 2), 'utf-8');
//     } catch(err) {
//         console.log('error occured while changing variable syntax colors: ' + (err as Error).message);
//     }
// }


export {syntaxScopes, changeCodeSyntaxColor};