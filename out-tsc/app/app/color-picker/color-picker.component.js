import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import IroColorPicker from '@jaames/iro';
let ColorPickerComponent = class ColorPickerComponent {
    constructor() {
        this.colorChange = new EventEmitter();
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        this.colorPicker = new IroColorPicker('#defaultPicker', {
            width: 250,
            color: 'rgb(255, 0, 0)',
            borderWidth: 1,
            borderColor: '#fff'
        });
        this.colorPicker.on('color:change', (color) => {
            console.log('Color changed:', color.hexString);
            this.colorChange.emit(color.hexString);
        });
    }
};
__decorate([
    Output()
], ColorPickerComponent.prototype, "colorChange", void 0);
ColorPickerComponent = __decorate([
    Component({
        selector: 'app-color-picker',
        standalone: true,
        templateUrl: './color-picker.component.html',
        styleUrls: ['./color-picker.component.css']
    })
], ColorPickerComponent);
export { ColorPickerComponent };
//# sourceMappingURL=color-picker.component.js.map