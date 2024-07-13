import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBannerComponent } from './third-banner.component';

describe('ThirdBannerComponent', () => {
  let component: ThirdBannerComponent;
  let fixture: ComponentFixture<ThirdBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
