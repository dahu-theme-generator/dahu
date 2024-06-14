import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
import { CommonModule } from '@angular/common';

declare function acquireVsCodeApi(): {
  postMessage(options: { command: string; data: unknown }): void;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorSketchModule,
    FormsModule,
    ColorPickerComponent,
    ColorPickerModule,
    LibraryComponent,
    EditSyntaxComponent,
    GenerateColorSchemeComponent,
    EditWorkbenchComponent,
    UploadFromPictureComponent
  ],
  standalone: true,
  styleUrls: ['./app.component.css'] // use `styleUrls` instead of `styleUrl`
})
export class AppComponent implements AfterViewInit {
  // title = 'dahu';
  // vscode = acquireVsCodeApi();

  @ViewChild('libraryComponent', { static: false }) libraryComponent!: ElementRef;

  ngAfterViewInit(): void {
    // Log libraryComponent to ensure it's available
    console.log('ngAfterViewInit:', this.libraryComponent);
  }

  scrollToLibrary(): void {
    if (this.libraryComponent && this.libraryComponent.nativeElement) {
      this.libraryComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('LibraryComponent is not available.', this.libraryComponent);
    }
  }
}
