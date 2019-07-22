import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung1Page } from './samsung1.page';

describe('Samsung1Page', () => {
  let component: Samsung1Page;
  let fixture: ComponentFixture<Samsung1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
