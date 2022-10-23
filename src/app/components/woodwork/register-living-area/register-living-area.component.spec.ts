import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLivingAreaComponent } from './register-living-area.component';

describe('RegisterLivingAreaComponent', () => {
  let component: RegisterLivingAreaComponent;
  let fixture: ComponentFixture<RegisterLivingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLivingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLivingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
