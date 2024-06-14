import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ColorPickerDialogComponent = class ColorPickerDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ColorPickerDialogComponent = __decorate([
    Component({
        selector: 'app-color-picker-dialog',
        standalone: true,
        templateUrl: './color-picker-dialog.component.html',
        styleUrls: ['./color-picker-dialog.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], ColorPickerDialogComponent);
export { ColorPickerDialogComponent };
//# sourceMappingURL=color-picker-dialog.component.js.map