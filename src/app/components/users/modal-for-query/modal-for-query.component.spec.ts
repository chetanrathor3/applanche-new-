import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForQueryComponent } from './modal-for-query.component';

describe('ModalForQueryComponent', () => {
  let component: ModalForQueryComponent;
  let fixture: ComponentFixture<ModalForQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalForQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalForQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
