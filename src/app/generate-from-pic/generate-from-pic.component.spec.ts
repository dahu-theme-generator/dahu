import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFromPicComponent } from './generate-from-pic.component';

describe('GenerateFromPicComponent', () => {
  let component: GenerateFromPicComponent;
  let fixture: ComponentFixture<GenerateFromPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateFromPicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateFromPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
