"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const generate_theme_component_1 = require("./generate-theme.component");
describe('GenerateThemeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [generate_theme_component_1.GenerateThemeComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(generate_theme_component_1.GenerateThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=generate-theme.component.spec.js.map