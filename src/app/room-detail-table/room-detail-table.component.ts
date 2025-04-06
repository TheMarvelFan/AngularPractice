import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { RoomDetails } from '../rooms/Rooms';

@Component({
  selector: 'app-room-detail-table',
  standalone: false,
  templateUrl: './room-detail-table.component.html',
  styleUrl: './room-detail-table.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomDetailTableComponent implements OnInit, OnChanges, OnDestroy {
  // onChanges is a lifecycle hook that is only applicable to components that have inputs

  ngOnInit(): void {
  }

  constructor() {}

  @Input()
  rooms: RoomDetails[] | null = [];

  @Input()
  title: string = "";

  @Input()
  price: number = 0;

  @Output()
  selectedRoom: EventEmitter<RoomDetails> = new EventEmitter<RoomDetails>();

  selectRoom(room: RoomDetails) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes["title"]) {
      this.title = changes["title"].currentValue.toUpperCase();
      console.log("Title changed");
    }
  }

  ngOnDestroy() {
    console.log("Rooms component destroyed");
  }
}
