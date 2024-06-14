import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
  vscode: any = (window as any).acquireVsCodeApi();

  constructor() {
    this.getPresets();
    window.addEventListener('message', event => {
      const message = event.data;
      if (message.command === 'presets') {
          this.themes = message.data.map((p: any) => p.name);
      }
    });

  }

  applyTheme(theme: string) {
    console.log('apply function called');
    // const vscode = (window as any).acquireVsCodeApi();
    this.vscode.postMessage({ command: 'applyPreset', data: { theme }});
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
