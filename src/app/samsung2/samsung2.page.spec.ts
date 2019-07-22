import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung2Page } from './samsung2.page';

describe('Samsung2Page', () => {
  let component: Samsung2Page;
  let fixture: ComponentFixture<Samsung2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
