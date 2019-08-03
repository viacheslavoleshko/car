import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxedPage } from './taxed.page';

describe('TaxedPage', () => {
  let component: TaxedPage;
  let fixture: ComponentFixture<TaxedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
