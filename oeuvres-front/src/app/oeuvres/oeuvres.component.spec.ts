import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OeuvresComponent} from './oeuvres.component';

describe('OeuvresComponent', () => {
  let component: OeuvresComponent;
  let fixture: ComponentFixture<OeuvresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OeuvresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
