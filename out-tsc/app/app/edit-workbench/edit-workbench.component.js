import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
let EditWorkbenchComponent = class EditWorkbenchComponent {
    constructor() {
        this.colors = [
            { name: 'Color 1', hex: '#FF0000' },
            { name: 'Color 2', hex: '#00FF00' },
            { name: 'Color 3', hex: '#0000FF' },
            { name: 'Color 4', hex: '#FFFF00' },
            { name: 'Color 5', hex: '#FF00FF' }
        ];
    }
    ngOnInit() {
        console.log('Initial colors:', this.colors);
    }
    updateColor(newHex, index) {
        this.colors[index].hex = newHex;
    }
    saveColors() {
        console.log('Colors saved:', this.colors);
    }
};
EditWorkbenchComponent = __decorate([
    Component({
        selector: 'app-edit-workbench',
        standalone: true,
        imports: [FormsModule],
        templateUrl: './edit-workbench.component.html',
        styleUrl: './edit-workbench.component.css'
    })
], EditWorkbenchComponent);
export { EditWorkbenchComponent };
//# sourceMappingURL=edit-workbench.component.js.map