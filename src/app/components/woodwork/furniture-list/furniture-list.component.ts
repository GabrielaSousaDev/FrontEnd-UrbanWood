import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FurnitureListComponent } from './search-specific-wood-work.component';

describe('SearchSpecificWoodWorkComponent', () => {
  let component: FurnitureListComponent;
  let fixture: ComponentFixture<FurnitureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
