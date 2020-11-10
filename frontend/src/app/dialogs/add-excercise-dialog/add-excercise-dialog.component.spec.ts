import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcerciseDialogComponent } from './add-excercise-dialog.component';

describe('AddExcerciseDialogComponent', () => {
  let component: AddExcerciseDialogComponent;
  let fixture: ComponentFixture<AddExcerciseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExcerciseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExcerciseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
