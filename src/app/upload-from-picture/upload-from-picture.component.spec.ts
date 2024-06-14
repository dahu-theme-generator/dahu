import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFromPictureComponent } from './upload-from-picture.component';

describe('UploadFromPictureComponent', () => {
  let component: UploadFromPictureComponent;
  let fixture: ComponentFixture<UploadFromPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFromPictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadFromPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
