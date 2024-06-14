import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
let GenerateColorSchemeComponent = class GenerateColorSchemeComponent {
    constructor() {
        this.selectedColor = '';
    }
    onColorSelected(color) {
        this.selectedColor = color;
    }
    updateColor(newHex) {
        this.selectedColor = newHex;
    }
};
GenerateColorSchemeComponent = __decorate([
    Component({
        selector: 'app-generate-color-scheme',
        standalone: true,
        imports: [ReactiveFormsModule, FormsModule, CommonModule, ColorPickerComponent],
        templateUrl: './generate-color-scheme.component.html',
        styleUrl: './generate-color-scheme.component.css'
    })
], GenerateColorSchemeComponent);
export { GenerateColorSchemeComponent };
//# sourceMappingURL=generate-color-scheme.component.js.map