import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung3Page } from './samsung3.page';

describe('Samsung3Page', () => {
  let component: Samsung3Page;
  let fixture: ComponentFixture<Samsung3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
