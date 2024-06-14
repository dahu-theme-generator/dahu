import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-from-picture',
  standalone: true,
  imports: [],
  templateUrl: './upload-from-picture.component.html',
  styleUrl: './upload-from-picture.component.css'
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
}

