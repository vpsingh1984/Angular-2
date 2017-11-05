import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrdirectiveComponent } from './attrdirective.component';

describe('AttrdirectiveComponent', () => {
  let component: AttrdirectiveComponent;
  let fixture: ComponentFixture<AttrdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
