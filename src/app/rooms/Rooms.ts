export interface Rooms {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomDetails {
  roomType: string;
  roomPrice: number;
  roomNumber: number;
  roomCapacity: number;
  roomPhoto: string;
  checkIn: Date;
  checkOut: Date;
  rating: number;
}
