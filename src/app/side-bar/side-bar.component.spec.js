"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const side_bar_component_1 = require("./side-bar.component");
const node_test_1 = require("node:test");
(0, node_test_1.describe)('SideBarComponent', () => {
    let component;
    let fixture;
    (0, node_test_1.beforeEach)(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [side_bar_component_1.SideBarComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(side_bar_component_1.SideBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    (0, node_test_1.it)('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=side-bar.component.spec.js.map