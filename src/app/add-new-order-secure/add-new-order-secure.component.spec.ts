import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOrderSecureComponent } from './add-new-order-secure.component';

describe('AddNewOrderSecureComponent', () => {
  let component: AddNewOrderSecureComponent;
  let fixture: ComponentFixture<AddNewOrderSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewOrderSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOrderSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
