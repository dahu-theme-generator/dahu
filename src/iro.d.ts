// src/iro.d.ts
declare module '@jaames/iro' {
  export interface Color {
    hexString: string;
    rgb: { r: number, g: number, b: number };
    hsv: { h: number, s: number, v: number };
  }

  export interface ColorPickerOptions {
    width: number;
    color: string;
    borderWidth?: number;
    borderColor?: string;
  }

  export interface ColorPickerEventMap {
    'color:change': (color: Color) => void;
  }

  export default class ColorPicker {
    constructor(element: string | HTMLElement, options: ColorPickerOptions);
    on<K extends keyof ColorPickerEventMap>(event: K, listener: ColorPickerEventMap[K]): void;
  }
}
