import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerdidoPage } from './add-perdido.page';

describe('AddPerdidoPage', () => {
  let component: AddPerdidoPage;
  let fixture: ComponentFixture<AddPerdidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPerdidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerdidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
