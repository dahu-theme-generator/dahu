import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-from-picture',
  standalone: true,
  templateUrl: './upload-from-picture.component.html',
  styleUrls: ['./upload-from-picture.component.css']
})
export class UploadFromPictureComponent {
  imageUrl: string | ArrayBuffer | null = null;

  constructor() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.previewImage(file);
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).classList.remove('drag-over');

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      if (file) {
        this.previewImage(file);
      }
    }
  }

  onDropZoneClick() {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput.click();
  }
}
