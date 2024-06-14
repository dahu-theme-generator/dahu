import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let LibraryComponent = class LibraryComponent {
    constructor() {
        this.themes = ['Theme 1', 'Theme 2', 'Theme 3']; // Replace with actual data fetching logic
        this.vscode = window.acquireVsCodeApi();
        this.getPresets();
        window.addEventListener('message', event => {
            const message = event.data;
            if (message.command === 'presets') {
                this.themes = message.data.map((p) => p.name);
            }
        });
    }
    applyTheme(theme) {
        console.log('apply function called');
        // const vscode = (window as any).acquireVsCodeApi();
        this.vscode.postMessage({ command: 'applyPreset', data: { theme } });
    }
    getPresets() {
        // const vscode = (window as any).acquireVsCodeApi();
        this.vscode.postMessage({ command: 'getPresets' });
    }
    savePreset(name) {
        this.vscode.postMessage({ command: 'savePreset', data: { name } });
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log('Edit Workbench ViewChild:', this.editWorkbench);
        if (this.editWorkbench && this.editWorkbench.nativeElement) {
            console.log('Edit Workbench NativeElement:', this.editWorkbench.nativeElement);
            this.editWorkbench.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else {
            console.log("Could not find edit workbench element");
        }
    }
    ngOnInit() {
        console.log('Themes:', this.themes);
        // Example data fetching logic
        // Uncomment the next line to add themes and test dynamic blocks
        //  this.themes = ['Theme 1', 'Theme 2', 'Theme 3'];
        // this.vscode = (window as any).acquireVsCodeApi();
        this.getPresets();
    }
    scrollToEditWorkbench() {
        const editWorkbenchElement = document.getElementById('editWorkbenchId');
        if (editWorkbenchElement) {
            editWorkbenchElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else {
            console.log("Could not find edit workbench element");
        }
    }
};
__decorate([
    ViewChild('editWorkbench', { static: false })
], LibraryComponent.prototype, "editWorkbench", void 0);
LibraryComponent = __decorate([
    Component({
        selector: 'app-library',
        standalone: true,
        imports: [CommonModule, FormsModule],
        templateUrl: './library.component.html',
        styleUrls: ['./library.component.css']
    })
], LibraryComponent);
export { LibraryComponent };
//# sourceMappingURL=library.component.js.map