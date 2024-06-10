import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ContentViewComponent } from '../content-view/content-view.component';
import { RouterModule } from '@angular/router';
let SideBarComponent = class SideBarComponent {
};
SideBarComponent = __decorate([
    Component({
        selector: 'app-side-bar',
        standalone: true,
        imports: [MatSidenavModule, ContentViewComponent, RouterModule, MatListModule],
        templateUrl: './side-bar.component.html',
        styleUrl: './side-bar.component.scss'
        //styleUrl: '../../styles.css'
    })
], SideBarComponent);
export { SideBarComponent };
//# sourceMappingURL=side-bar.component.js.map