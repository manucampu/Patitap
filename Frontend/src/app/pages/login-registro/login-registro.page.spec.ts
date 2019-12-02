import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistroPage } from './login-registro.page';

describe('LoginRegistroPage', () => {
  let component: LoginRegistroPage;
  let fixture: ComponentFixture<LoginRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegistroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
