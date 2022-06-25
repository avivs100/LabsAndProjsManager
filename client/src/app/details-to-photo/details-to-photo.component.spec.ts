import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsToPhotoComponent } from './details-to-photo.component';

describe('DetailsToPhotoComponent', () => {
  let component: DetailsToPhotoComponent;
  let fixture: ComponentFixture<DetailsToPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsToPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsToPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
