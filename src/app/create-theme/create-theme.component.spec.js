"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const create_theme_component_1 = require("./create-theme.component");
describe('CreateThemeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [create_theme_component_1.CreateThemeComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(create_theme_component_1.CreateThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-theme.component.spec.js.map