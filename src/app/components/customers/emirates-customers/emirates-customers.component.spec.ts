import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiratesCustomersComponent } from './emirates-customers.component';

describe('EmiratesCustomersComponent', () => {
  let component: EmiratesCustomersComponent;
  let fixture: ComponentFixture<EmiratesCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiratesCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiratesCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
