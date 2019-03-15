import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paper3Component } from './paper3.component';

describe('Paper3Component', () => {
  let component: Paper3Component;
  let fixture: ComponentFixture<Paper3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paper3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
