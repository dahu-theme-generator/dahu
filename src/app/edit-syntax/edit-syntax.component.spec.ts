import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSyntaxComponent } from './edit-syntax.component';

describe('EditSyntaxComponent', () => {
  let component: EditSyntaxComponent;
  let fixture: ComponentFixture<EditSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
