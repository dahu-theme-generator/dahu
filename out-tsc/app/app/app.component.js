import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dahu';
        this.vscode = acquireVsCodeApi();
        window.addEventListener('message', (event) => {
            if (event.data.command === 'update-title') {
                this.title = event.data.payload.title;
            }
        });
    }
    postToExtension(text) {
        this.vscode.postMessage({
            command: 'notification',
            data: {
                text,
            },
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        imports: [SideBarComponent],
        standalone: true,
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map