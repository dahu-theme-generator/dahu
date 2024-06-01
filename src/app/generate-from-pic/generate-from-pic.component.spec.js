"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const generate_from_pic_component_1 = require("./generate-from-pic.component");
describe('GenerateFromPicComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [generate_from_pic_component_1.GenerateFromPicComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(generate_from_pic_component_1.GenerateFromPicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=generate-from-pic.component.spec.js.map