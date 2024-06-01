"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const content_view_component_1 = require("./content-view.component");
describe('ContentViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [content_view_component_1.ContentViewComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(content_view_component_1.ContentViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=content-view.component.spec.js.map