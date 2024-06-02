import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContentViewComponent } from '../content-view/content-view.component';
let SideBarComponent = class SideBarComponent {
};
SideBarComponent = __decorate([
    Component({
        selector: 'app-side-bar',
        standalone: true,
        imports: [MatSidenavModule, ContentViewComponent],
        templateUrl: './side-bar.component.html',
        styleUrl: './side-bar.component.scss'
    })
], SideBarComponent);
export { SideBarComponent };
//# sourceMappingURL=side-bar.component.js.map