import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCardImagesComponent } from './large-card-images.component';

describe('LargeCardImagesComponent', () => {
  let component: LargeCardImagesComponent;
  let fixture: ComponentFixture<LargeCardImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeCardImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeCardImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
