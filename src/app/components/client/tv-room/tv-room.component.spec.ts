import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvRoomComponent } from './tv-room.component';

describe('TvRoomComponent', () => {
  let component: TvRoomComponent;
  let fixture: ComponentFixture<TvRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
