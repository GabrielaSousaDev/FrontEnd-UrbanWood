import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWoodworksComponent } from './filter-woodworks.component';

describe('AreaLivingComponent', () => {
  let component: FilterWoodworksComponent;
  let fixture: ComponentFixture<FilterWoodworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterWoodworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterWoodworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
