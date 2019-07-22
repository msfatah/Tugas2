import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung5Page } from './samsung5.page';

describe('Samsung5Page', () => {
  let component: Samsung5Page;
  let fixture: ComponentFixture<Samsung5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
