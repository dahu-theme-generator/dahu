import axios from 'axios';
const ColorThief = require('colorthief');
import * as vscode from 'vscode';

async function generatePalette(color: string): Promise<string[]> {
    try {
        const response = await axios.get('http://palett.es/API/v1/palette/from/' + color.substring(1));
        return response.data;
    } catch(error) {
        console.log('error while retrieving colors: ' + (error as Error).message);
        return [];
    }
}

async function getColorPalleteFromImage(fileURI: vscode.Uri): Promise<string[]> {
    const filePath = fileURI.fsPath;
    try {
        const colorPalette = await ColorThief.getPalette(filePath, 5);
        const hexPalette = colorPalette.map((rgb: any) => {
            return '#' + rgb.map((component: any) => {rbgToHex(component);}).join('');
        });
        return hexPalette;
    } catch(error) {
        console.log('error while generating colors from picture: ' + (error as Error).message);
        return [];
    }
}

function rbgToHex(color: number): string {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex: hex;
}

export { generatePalette, getColorPalleteFromImage};