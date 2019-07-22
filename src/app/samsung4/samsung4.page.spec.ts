import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung4Page } from './samsung4.page';

describe('Samsung4Page', () => {
  let component: Samsung4Page;
  let fixture: ComponentFixture<Samsung4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
