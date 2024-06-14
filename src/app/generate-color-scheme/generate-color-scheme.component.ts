import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Color } from 'vscode';



@Component({
  selector: 'app-generate-color-scheme',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, ColorPickerComponent],
  templateUrl: './generate-color-scheme.component.html',
  styleUrl: './generate-color-scheme.component.css'
})
export class GenerateColorSchemeComponent {
  selectedColor: string = '';

  onColorSelected(color: string) {
    this.selectedColor = color;
  }
  updateColor(newHex: string) {
    this.selectedColor = newHex;
  }
}
