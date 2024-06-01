"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const library_component_1 = require("./library.component");
describe('LibraryComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [library_component_1.LibraryComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(library_component_1.LibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=library.component.spec.js.map