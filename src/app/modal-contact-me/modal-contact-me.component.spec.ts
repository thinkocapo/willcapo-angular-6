import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactMeComponent } from './modal-contact-me.component';

describe('ModalContactMeComponent', () => {
  let component: ModalContactMeComponent;
  let fixture: ComponentFixture<ModalContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContactMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
