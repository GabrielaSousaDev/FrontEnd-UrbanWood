import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingAreaWoodworkComponent } from './living-area-woodwork.component';

describe('LivingAreaWoodworkComponent', () => {
  let component: LivingAreaWoodworkComponent;
  let fixture: ComponentFixture<LivingAreaWoodworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingAreaWoodworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingAreaWoodworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
