import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallGradesComponent } from './overall-grades.component';

describe('OverallGradesComponent', () => {
  let component: OverallGradesComponent;
  let fixture: ComponentFixture<OverallGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
