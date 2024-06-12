declare module 'colorthief' {
    interface ColorThief {
        getColor(image: string | HTMLImageElement, quality?: number): Promise<[number, number, number]>;
        getPalette(image: string | HTMLImageElement, colorCount?: number, quality?: number): Promise<[number, number, number][]>;
    }
    
    const colorThief: ColorThief;
    export default colorThief;
}