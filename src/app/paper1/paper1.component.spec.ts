import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paper1Component } from './paper1.component';

describe('Paper1Component', () => {
  let component: Paper1Component;
  let fixture: ComponentFixture<Paper1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paper1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
