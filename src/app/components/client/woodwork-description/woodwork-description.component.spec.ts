import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodworkDescriptionComponent } from './woodwork-description.component';

describe('WoodworkDescriptionComponent', () => {
  let component: WoodworkDescriptionComponent;
  let fixture: ComponentFixture<WoodworkDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodworkDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodworkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
