import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung6Page } from './samsung6.page';

describe('Samsung6Page', () => {
  let component: Samsung6Page;
  let fixture: ComponentFixture<Samsung6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
