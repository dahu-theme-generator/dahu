import { Component, EventEmitter, Output, AfterViewInit } from '@angular/core';
import IroColorPicker from '@jaames/iro';
@Component({
  selector: 'app-color-picker',
  standalone: true,
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements AfterViewInit {
  private colorPicker: IroColorPicker | undefined;
  @Output() colorChange = new EventEmitter<string>();

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    this.colorPicker = new IroColorPicker('#defaultPicker', {
      width: 250,
      color: 'rgb(255, 0, 0)',
      borderWidth: 1,
      borderColor: '#fff'
    });

    this.colorPicker.on('color:change', (color) => {
      console.log('Color changed:', color.hexString);
      this.colorChange.emit(color.hexString);
    });
  }
}
