import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingAreaClientComponent } from './living-area-client.component';

describe('LivingAreaClientComponent', () => {
  let component: LivingAreaClientComponent;
  let fixture: ComponentFixture<LivingAreaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingAreaClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingAreaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
