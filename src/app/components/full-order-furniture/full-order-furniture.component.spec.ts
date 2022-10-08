import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullOrderFurnitureComponent } from './full-order-furniture.component';

describe('FullOrderFurnitureComponent', () => {
  let component: FullOrderFurnitureComponent;
  let fixture: ComponentFixture<FullOrderFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullOrderFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullOrderFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
