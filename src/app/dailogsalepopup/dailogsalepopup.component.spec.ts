import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogsalepopupComponent } from './dailogsalepopup.component';

describe('DailogsalepopupComponent', () => {
  let component: DailogsalepopupComponent;
  let fixture: ComponentFixture<DailogsalepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogsalepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogsalepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
