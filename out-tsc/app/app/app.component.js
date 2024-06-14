import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LibraryComponent } from './library/library.component';
import { EditSyntaxComponent } from './edit-syntax/edit-syntax.component';
import { GenerateColorSchemeComponent } from './generate-color-scheme/generate-color-scheme.component';
import { EditWorkbenchComponent } from './edit-workbench/edit-workbench.component';
import { UploadFromPictureComponent } from './upload-from-picture/upload-from-picture.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule } from '@angular/forms';
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
        imports: [ReactiveFormsModule, ColorSketchModule, FormsModule, ColorPickerComponent, ColorPickerModule,
            LibraryComponent,
            EditSyntaxComponent,
            GenerateColorSchemeComponent, EditWorkbenchComponent, UploadFromPictureComponent
        ],
        standalone: true,
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map