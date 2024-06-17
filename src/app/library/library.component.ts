import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { globalExtensionPath } from 'ext-src/extension';
import { getPresets } from 'ext-src/dbConnector';
import { Preset } from 'ext-src/dataObjects';
import { VsCodeApiService } from 'src/vsCodeAPIService';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements AfterViewInit {
  @ViewChild('editWorkbench', { static: false }) editWorkbench!: ElementRef;

  themes: string[] = ['Theme 1', 'Theme 2', 'Theme 3']; // Replace with actual data fetching logic
  // private vscode: any = (window as any).acquireVsCodeApi();
  private vscode: any;
  presets: Preset[] = [];
  currentTheme!: Preset;

  constructor(vsCodeApiService: VsCodeApiService) {
    this.vscode = vsCodeApiService.getVsCodeApi();
    this.getPresets();
    this.getCurrentTheme();
    window.addEventListener('message', event => {
      const message = event.data;
      if (message.command === 'presets') {
          this.themes = message.data.map((p: any) => p.name);
          this.presets = message.data;
      }
    });
    window.addEventListener('message', event => {
      const message = event.data;
      if(message.command === 'currentTheme') {
        console.log('RECEIVED OBJ: ', message.data);
        this.currentTheme = message.data;
      }
    });
    window.addEventListener('message', event => {
      const message = event.data;
      if(message.command === 'applyPreset') {
        console.log('RECEIVED OBJ: ', message.data);
        this.currentTheme = message.data;
      }
    });
  }
 

  getCurrentTheme() {
    this.vscode.postMessage({command: 'getCurrentTheme'});
    console.log("Current theme!!!!!: ", this.currentTheme);
  }
  applyTheme(theme: Preset) {
    console.log('apply function called');
    // const vscode = (window as any).acquireVsCodeApi();
    this.vscode.postMessage({ command: 'applyPreset', data: { theme }});
    this.getCurrentTheme();
  }

  getPresets() {
    // const vscode = (window as any).acquireVsCodeApi();
    this.vscode.postMessage({ command: 'getPresets' });
}

  savePreset(name: string) {
      this.vscode.postMessage({ command: 'savePreset', data: { name } });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Edit Workbench ViewChild:', this.editWorkbench);
    if (this.editWorkbench && this.editWorkbench.nativeElement) {
      console.log('Edit Workbench NativeElement:', this.editWorkbench.nativeElement);
      this.editWorkbench.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log("Could not find edit workbench element");
    }
  }
  ngOnInit(): void {
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
    } else {
      console.log("Could not find edit workbench element");
    }
  }
}
