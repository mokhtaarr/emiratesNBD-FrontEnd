import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerDeleteConfirmComponent } from './cutomer-delete-confirm.component';

describe('CutomerDeleteConfirmComponent', () => {
  let component: CutomerDeleteConfirmComponent;
  let fixture: ComponentFixture<CutomerDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerDeleteConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
