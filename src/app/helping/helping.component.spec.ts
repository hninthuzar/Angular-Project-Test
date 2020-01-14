import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingComponent } from './helping.component';

describe('HelpingComponent', () => {
  let component: HelpingComponent;
  let fixture: ComponentFixture<HelpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
