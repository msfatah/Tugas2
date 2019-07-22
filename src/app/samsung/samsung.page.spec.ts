import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungPage } from './samsung.page';

describe('SamsungPage', () => {
  let component: SamsungPage;
  let fixture: ComponentFixture<SamsungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
