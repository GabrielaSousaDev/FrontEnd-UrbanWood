import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFurnitureComponent } from './order-furniture.component';

describe('OrderFurnitureComponent', () => {
  let component: OrderFurnitureComponent;
  let fixture: ComponentFixture<OrderFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
