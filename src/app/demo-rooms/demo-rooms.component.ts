import {Component } from '@angular/core';

@Component({
  selector: 'app-demo-rooms',
  standalone: false,
  templateUrl: './demo-rooms.component.html',
  styleUrl: './demo-rooms.component.css'
})
export class DemoRoomsComponent {
  constructor() {
  }
}














































































  // constructor(private service: ConnectToApiService) {
  // }
  //
  // rooms: RoomDetails[] | null = [];
  //
  // addRoom() {
  //   this.service.addRoom().subscribe(rooms => {
  //     this.rooms = rooms;
  //   });
  // }
  //
  // removeRoom() {
  //   this.service.removeRoom().subscribe(rooms => {
  //     this.rooms = rooms;
  //   });
  // }
  //
  // editRoom() {
  //   this.service.editRoom().subscribe(rooms => {
  //     this.rooms = rooms;
  //   });
  // }
  //
  // ngOnInit(): void {
  //   this.service.getRooms().subscribe(rooms => {
  //     this.rooms = rooms;
  //   });
  // }
