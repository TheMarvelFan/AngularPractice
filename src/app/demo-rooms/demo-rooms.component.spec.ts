import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRoomsComponent } from './demo-rooms.component';

describe('DemoRoomsComponent', () => {
  let component: DemoRoomsComponent;
  let fixture: ComponentFixture<DemoRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoRoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
