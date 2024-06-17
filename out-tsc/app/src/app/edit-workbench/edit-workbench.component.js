import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
let EditWorkbenchComponent = class EditWorkbenchComponent {
    constructor(vsCodeApiService) {
        this.colors = [
            { name: 'Color 1', hex: '#FF0000' },
            { name: 'Color 2', hex: '#00FF00' },
            { name: 'Color 3', hex: '#0000FF' },
            { name: 'Color 4', hex: '#FFFF00' },
            { name: 'Color 5', hex: '#FF00FF' }
        ];
        this.vscode = vsCodeApiService.getVsCodeApi();
        this.getCurrentTheme();
        window.addEventListener('message', event => {
            const message = event.data;
            if (message.command === 'currentTheme') {
                console.log('RECEIVED OBJ: ', message.data);
                const currentTheme = message.data;
                this.colors = [
                    { name: 'Editor', hex: currentTheme.editorColor },
                    { name: 'Side Bar', hex: currentTheme.sidebarColor },
                    { name: 'Panel', hex: currentTheme.panelColor },
                    { name: 'Status Bar', hex: currentTheme.statusBarColor },
                    { name: 'Tabs', hex: currentTheme.tabsColor },
                ];
            }
        });
    }
    getCurrentTheme() {
        this.vscode.postMessage({ command: 'getCurrentTheme' });
    }
    ngOnInit() {
        console.log('Initial colors:', this.colors);
        // this.getCurrentTheme();
        // window.addEventListener('message', event => {
        //   const message = event.data;
        //   console.log('received object: ', message.data);
        // });
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
        imports: [FormsModule, CommonModule],
        templateUrl: './edit-workbench.component.html',
        styleUrls: ['./edit-workbench.component.css']
    })
], EditWorkbenchComponent);
export { EditWorkbenchComponent };
//# sourceMappingURL=edit-workbench.component.js.map