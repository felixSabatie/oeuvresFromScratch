import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentFormComponent } from './adherent-form.component';

describe('FormComponent', () => {
  let component: AdherentFormComponent;
  let fixture: ComponentFixture<AdherentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
