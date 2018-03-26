import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentCreateComponent } from './adherent-create.component';

describe('CreateComponent', () => {
  let component: AdherentCreateComponent;
  let fixture: ComponentFixture<AdherentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
