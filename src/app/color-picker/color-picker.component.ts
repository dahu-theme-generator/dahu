import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild('colorWheelCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Output() colorSelected = new EventEmitter<string>(); // Output event to emit the selected color
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.drawColorWheel();
    this.canvas.nativeElement.addEventListener('click', this.pickColor.bind(this));
  }

  drawColorWheel() {
    const canvas = this.canvas.nativeElement;
    const ctx = this.ctx;
    const radius = canvas.width / 2;
    const imageData = ctx.createImageData(canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        const dx = x - radius;
        const dy = y - radius;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= radius) {
          const angle = Math.atan2(dy, dx) + Math.PI;
          const hue = angle * (180 / Math.PI);
          const saturation = distance / radius;
          const [r, g, b] = this.hsvToRgb(hue, saturation, 1);
          const index = (y * canvas.width + x) * 4;
          imageData.data[index] = r;
          imageData.data[index + 1] = g;
          imageData.data[index + 2] = b;
          imageData.data[index + 3] = 255;
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }

  pickColor(event: MouseEvent) {
    const canvas = this.canvas.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const imageData = this.ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = [imageData[0], imageData[1], imageData[2]];
    const hexColor = this.rgbToHex(r, g, b);
    console.log(`Selected color: ${hexColor}`);
    this.colorSelected.emit(hexColor); // Emit the selected color in hex format
  }

  hsvToRgb(h: number, s: number, v: number): number[] {
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    let [r, g, b] = [0, 0, 0];

    if (h >= 0 && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
      [r, g, b] = [x, 0, c];
    } else if (h >= 300 && h < 360) {
      [r, g, b] = [c, 0, x];
    }

    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
  }

  rgbToHex(r: number, g: number, b: number): string {
    return `#${this.toHex(r)}${this.toHex(g)}${this.toHex(b)}`;
  }

  toHex(value: number): string {
    return value.toString(16).padStart(2, '0');
  }
}
