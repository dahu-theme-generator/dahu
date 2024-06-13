# README

Dahu is advanced color theme extension for Visual Studio Code.

## Features

- Changing code editor, sidebar, status bar, tabs and panel background colors to whatever you like.
- Changing code syntax colors (class names, variables, keywords, functions, etc.) to whatever you like.
- Saving the current color combination to a preset and naming it whatever you like.
- Choosing a preset from saved ones and applying it.

### Language support

This extension currently offers code syntax highlighting support for these languages:
- C
- C#
- Go
- Java
- Python
- JavaScript, TypeScript
- PHP

For other languages, it might not highlight the code syntax fully -> look for future updates.

### TODO: Put screenshots of extension features

## Requirements

- Only Visual Studio Code is required to run the extension.

## About color generation
This extension uses some APIs to provide functionality of generating colors from a base color or image. For generating color palette from a base color, we used [Palette.es API](https://palett.es/about), and for creating set of colors from a image we chose [Color Thief API](https://lokeshdhakar.com/projects/color-thief/#examples).

## Extension Settings
### TODO: add settings??

## Running

- ```npm i```
- ```npm run build```
- ```F5```
- in the new window ```shift``` + ```ctrl``` + ```p``` select ```Open webview``` for webview preview.

### Notes for developers

Colors of the extension are automatically adapted based on the current vs code theme. To add more colors you can access global css variables in src/styles.css inside ```:root{}```. More styles can be found at https://code.visualstudio.com/api/references/theme-color. Change ```.``` to  ```-```.
**Enjoy!**
