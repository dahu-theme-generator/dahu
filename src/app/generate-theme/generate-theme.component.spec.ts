import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateThemeComponent } from './generate-theme.component';

describe('GenerateThemeComponent', () => {
  let component: GenerateThemeComponent;
  let fixture: ComponentFixture<GenerateThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
