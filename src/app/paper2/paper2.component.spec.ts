import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paper2Component } from './paper2.component';

describe('Paper2Component', () => {
  let component: Paper2Component;
  let fixture: ComponentFixture<Paper2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paper2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
