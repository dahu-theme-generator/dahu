import axios from 'axios';
const ColorThief = require('colorthief');
async function generatePalette(color) {
    try {
        const response = await axios.get('http://palett.es/API/v1/palette/from/' + color.substring(1));
        return response.data;
    }
    catch (error) {
        console.log('error while retrieving colors: ' + error.message);
        return [];
    }
}
async function getColorPalleteFromImage(fileURI) {
    const filePath = fileURI.fsPath;
    try {
        const colorPalette = await ColorThief.getPalette(filePath, 5);
        const hexPalette = colorPalette.map((rgb) => {
            return '#' + rgb.map((component) => rgbToHex(component)).join('');
        });
        return hexPalette;
    }
    catch (error) {
        console.log('error while generating colors from picture: ' + error.message);
        return [];
    }
}
function rgbToHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
export { generatePalette, getColorPalleteFromImage };
//# sourceMappingURL=colorGenerator.js.map