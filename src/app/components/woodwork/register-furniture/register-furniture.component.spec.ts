import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFurnitureComponent } from './register-furniture.component';

describe('RegisterFurnitureComponent', () => {
  let component: RegisterFurnitureComponent;
  let fixture: ComponentFixture<RegisterFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
