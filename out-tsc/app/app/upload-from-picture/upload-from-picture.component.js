import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UploadFromPictureComponent = class UploadFromPictureComponent {
    constructor() {
        this.imageUrl = null;
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        if (file) {
            this.previewImage(file);
        }
    }
    previewImage(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageUrl = reader.result;
        };
    }
};
UploadFromPictureComponent = __decorate([
    Component({
        selector: 'app-upload-from-picture',
        standalone: true,
        imports: [],
        templateUrl: './upload-from-picture.component.html',
        styleUrl: './upload-from-picture.component.css'
    })
], UploadFromPictureComponent);
export { UploadFromPictureComponent };
//# sourceMappingURL=upload-from-picture.component.js.map