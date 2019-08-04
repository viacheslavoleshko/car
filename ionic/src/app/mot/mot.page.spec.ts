import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotPage } from './mot.page';

describe('MotPage', () => {
  let component: MotPage;
  let fixture: ComponentFixture<MotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
