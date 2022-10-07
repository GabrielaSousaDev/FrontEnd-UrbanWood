import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFurnitureClientComponent } from './list-furniture-client.component';

describe('ListFurnitureClientComponent', () => {
  let component: ListFurnitureClientComponent;
  let fixture: ComponentFixture<ListFurnitureClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFurnitureClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFurnitureClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
