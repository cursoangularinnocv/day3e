import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Products3Component } from './products3.component';

describe('Products3Component', () => {
  let component: Products3Component;
  let fixture: ComponentFixture<Products3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Products3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Products3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
