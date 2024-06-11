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
//     scope: string | string[],
//     settings: { color: string }
// };

let syntaxScopes: { scope: string | string[], settings: { foreground: string } }[] = [
    {
        scope: "enum",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        scope: "variable",
        settings: {
          foreground: "#cc07fd"
        }
      },
      {
        scope: [
          "variable.other.member",
          "variable.other.object.property"
        ],
        settings: {
          foreground: "#26fdf8"
        }
      },
      {
        scope: "decorator",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        scope: [
          "function",
          "entity.name.function"
        ],
        settings: {
          foreground: "#f6ee0d"
        }
      },
      {
        scope: [
          "comment",
          "punctuation.definition.comment"
        ],
        settings: {
          foreground: "#4c4c4c"
        }
      },
      {
        scope: "string",
        settings: {
          foreground: "#fd3307"
        }
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#d0f60d"
        }
      },
      {
        scope: "number",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#3eccef"
        }
      },
      {
        scope: "storage.type",
        settings: {
          foreground: "#0df6e3"
        }
      },
      {
        scope: "entity.name.type.class",
        settings: {
          foreground: "#eaef3e"
        }
      },
      {
        scope: "storage.modifier",
        settings: {
          foreground: "#6e3eef"
        }
      },
      {
        scope: [
          "constant.language",
          "constant.numeric"
        ],
        settings: {
          foreground: "#f85457"
        }
      },
      {
        scope: [
          "meta.method",
          "meta.function-call"
        ],
        settings: {
          foreground: "#fd9126"
        }
      },
      {
        scope: "punctuation",
        settings: {
          foreground: "#d5fd26"
        }
      }
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