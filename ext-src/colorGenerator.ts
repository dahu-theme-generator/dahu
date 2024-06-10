import axios from 'axios';

async function generatePalette(color: string): Promise<string[]> {
    try {
        const response = await axios.get('http://palett.es/API/v1/palette/from/' + color.substring(1));
        return response.data;
    } catch(error) {
        console.log('error while retrieving colors: ' + (error as Error).message);
        return [];
    }
}

export { generatePalette };