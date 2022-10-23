import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWoodworkComponent } from './header-woodwork.component';

describe('HeaderWoodworkComponent', () => {
  let component: HeaderWoodworkComponent;
  let fixture: ComponentFixture<HeaderWoodworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWoodworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWoodworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
