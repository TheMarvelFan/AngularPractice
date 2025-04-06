import { Component } from '@angular/core';
import {RoomDetails} from '../Rooms';
import {RoomsService} from '../services/rooms.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-room',
  standalone: false,
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {
  room: RoomDetails = {
    roomType: "",
    roomCapacity: 0,
    rating: 0.0,
    roomPrice: 0.0,
    roomPhoto: "",
    checkIn: new Date(),
    checkOut: new Date(),
    roomNumber: 0
  };

  constructor(private roomService: RoomsService) {
  }

  successMessage: string = "";

  addRoom(roomForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe(() => {
      this.successMessage = "Room added successfully";
      roomForm.resetForm(
        {
          roomType: "",
          roomCapacity: 0,
          rating: 0.0,
          roomPrice: 0.0,
          roomPhoto: "",
          checkIn: new Date(),
          checkOut: new Date(),
          roomNumber: 0
        }
      );
    });
  }
}
