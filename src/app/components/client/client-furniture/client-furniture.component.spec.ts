import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFurnitureComponent } from './client-furniture.component';

describe('ClientFurnitureComponent', () => {
  let component: ClientFurnitureComponent;
  let fixture: ComponentFixture<ClientFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
