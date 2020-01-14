import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogpopupComponent } from './dailogpopup.component';

describe('DailogpopupComponent', () => {
  let component: DailogpopupComponent;
  let fixture: ComponentFixture<DailogpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
