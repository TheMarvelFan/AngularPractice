import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailTableComponent } from './room-detail-table.component';

describe('RoomDetailTableComponent', () => {
  let component: RoomDetailTableComponent;
  let fixture: ComponentFixture<RoomDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomDetailTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
