import { Component, NgModule } from '@angular/core';
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

declare function acquireVsCodeApi(): {
  postMessage(options: { command: string; data: unknown }): void;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ ReactiveFormsModule, ColorSketchModule, FormsModule, ColorPickerComponent, ColorPickerModule,
      LibraryComponent, 
      EditSyntaxComponent, 
      GenerateColorSchemeComponent, EditWorkbenchComponent, UploadFromPictureComponent
  ],
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dahu';
  vscode = acquireVsCodeApi();

  constructor() {
    window.addEventListener(
      'message',
      (
        event: MessageEvent<{ command: string; payload: { title: string } }>,
      ) => {
        if (event.data.command === 'update-title') {
          this.title = event.data.payload.title;
        }
      },
    );
  }

  postToExtension(text: string) {
    this.vscode.postMessage({
      command: 'notification',
      data: {
        text,
      },
    });
  }
}
