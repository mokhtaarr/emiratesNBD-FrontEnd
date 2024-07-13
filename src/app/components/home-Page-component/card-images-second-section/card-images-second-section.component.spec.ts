import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagesSecondSectionComponent } from './card-images-second-section.component';

describe('CardImagesSecondSectionComponent', () => {
  let component: CardImagesSecondSectionComponent;
  let fixture: ComponentFixture<CardImagesSecondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImagesSecondSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImagesSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
