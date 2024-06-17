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
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.classList.add('drag-over');
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.classList.remove('drag-over');
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.classList.remove('drag-over');
        if (event.dataTransfer?.files.length) {
            const file = event.dataTransfer.files[0];
            if (file) {
                this.previewImage(file);
            }
        }
    }
    onDropZoneClick() {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    }
};
UploadFromPictureComponent = __decorate([
    Component({
        selector: 'app-upload-from-picture',
        standalone: true,
        templateUrl: './upload-from-picture.component.html',
        styleUrls: ['./upload-from-picture.component.css']
    })
], UploadFromPictureComponent);
export { UploadFromPictureComponent };
//# sourceMappingURL=upload-from-picture.component.js.map