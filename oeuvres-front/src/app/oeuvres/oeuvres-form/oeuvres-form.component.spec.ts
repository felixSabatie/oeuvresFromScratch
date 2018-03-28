/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OeuvresFormComponent } from './oeuvres-form.component';

describe('OeuvresFormComponent', () => {
  let component: OeuvresFormComponent;
  let fixture: ComponentFixture<OeuvresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
