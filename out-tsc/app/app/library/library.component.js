import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let LibraryComponent = class LibraryComponent {
    constructor() {
        this.themes = ['Theme 1', 'Theme 2', 'Theme 3']; // Replace with actual data fetching logic
    }
    ngOnInit() {
        console.log('Themes:', this.themes);
        // Example data fetching logic
        // Uncomment the next line to add themes and test dynamic blocks
        this.themes = ['Theme 1', 'Theme 2', 'Theme 3'];
    }
};
LibraryComponent = __decorate([
    Component({
        selector: 'app-library',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './library.component.html',
        styleUrls: ['./library.component.css']
    })
], LibraryComponent);
export { LibraryComponent };
//# sourceMappingURL=library.component.js.map