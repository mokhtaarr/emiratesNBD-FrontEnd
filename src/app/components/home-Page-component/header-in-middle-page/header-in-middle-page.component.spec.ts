import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInMiddlePageComponent } from './header-in-middle-page.component';

describe('HeaderInMiddlePageComponent', () => {
  let component: HeaderInMiddlePageComponent;
  let fixture: ComponentFixture<HeaderInMiddlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInMiddlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInMiddlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
