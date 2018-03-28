/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OeuvresEditComponent } from './oeuvres-edit.component';

describe('OeuvresEditComponent', () => {
  let component: OeuvresEditComponent;
  let fixture: ComponentFixture<OeuvresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
