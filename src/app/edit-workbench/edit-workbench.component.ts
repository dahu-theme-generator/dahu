import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { VsCodeApiService } from 'src/vsCodeAPIService';
import { Preset } from 'ext-src/dataObjects';

@Component({
  selector: 'app-edit-workbench',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-workbench.component.html',
  styleUrls:[ './edit-workbench.component.css']
})
export class EditWorkbenchComponent {
  // private vscode = (window as any).acquireVsCodeApi();
  private vscode: any;
  currentTheme: Preset = {
    id: 0,
    name: '',
    editorColor: '',
    sidebarColor: '',
    panelColor: '',
    statusBarColor: '',
    tabsColor: '',
    tokenColors: ''
  };

  colors: { name: string; hex: string }[] = [];
  // colors = [
  //   { name: 'Color 1', hex: '#FF0000' },
  //   { name: 'Color 2', hex: '#00FF00' },
  //   { name: 'Color 3', hex: '#0000FF' },
  //   { name: 'Color 4', hex: '#FFFF00' },
  //   { name: 'Color 5', hex: '#FF00FF' }
  // ];
  
  constructor(vsCodeApiService: VsCodeApiService) {
    this.vscode = vsCodeApiService.getVsCodeApi();
    this.getCurrentTheme();
    window.addEventListener('message', event => {
      const message = event.data;
      if(message.command === 'currentTheme') {
        console.log('RECEIVED OBJ: ', message.data);
        this.currentTheme = message.data;
        this.colors = [
          { name: 'Editor', hex: this.currentTheme.editorColor },
          { name: 'Side Bar', hex: this.currentTheme.sidebarColor },
          { name: 'Panel', hex: this.currentTheme.panelColor },
          { name: 'Status Bar', hex: this.currentTheme.statusBarColor },
          { name: 'Tabs', hex: this.currentTheme.tabsColor },
        ];
      }
    });
  }

  getCurrentTheme() {
    this.vscode.postMessage({command: 'getCurrentTheme'});
  }

  ngOnInit() {
    this.getCurrentTheme;
    console.log('Initial colors:', this.colors);
    // this.getCurrentTheme();
    // window.addEventListener('message', event => {
    //   const message = event.data;
    //   console.log('received object: ', message.data);
    // });
  }

  updateColor(newHex: string, index: number) {
    this.colors[index].hex = newHex;
    switch (this.colors[index].name) {
      case 'Editor':
        this.currentTheme.editorColor = newHex;
        break;
      case 'Side Bar':
        this.currentTheme.sidebarColor = newHex;
        break;
      case 'Panel':
        this.currentTheme.panelColor = newHex;
        break;
      case 'Status Bar':
        this.currentTheme.statusBarColor = newHex;
        break;
      case 'Tabs':
        this.currentTheme.tabsColor = newHex;
        break;
    }
  }

  saveColors() {
    this.vscode.postMessage({command: 'updatePreset', data: this.currentTheme});
  }

}
