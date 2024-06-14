import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkbenchComponent } from './edit-workbench.component';

describe('EditWorkbenchComponent', () => {
  let component: EditWorkbenchComponent;
  let fixture: ComponentFixture<EditWorkbenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWorkbenchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
