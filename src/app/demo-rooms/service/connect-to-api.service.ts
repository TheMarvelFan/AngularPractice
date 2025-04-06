import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectToApiService {

  constructor() { }

}








































































































// getRooms(): Observable<RoomDetails[]> {
//   console.log('GetRooms method called');
//   return this.http.get<RoomDetails[]>("http://localhost:8000/api/v1/rooms");
// }
//
// addRoom(): Observable<RoomDetails[]> {
//   return this.http.post<RoomDetails[]>("http://localhost:8000/api/v1/rooms", {
//     roomType: "Double",
//     roomPrice: 123,
//     // roomNumber: 34,
//     roomCapacity: 2,
//     roomPhoto: "https://plus.unsplash.com/premium_photo-1676823552681-bf1d1135fa2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     checkIn: new Date("2022-01-01"),
//     checkOut: new Date("2022-01-02"),
//     rating: 0.0
//   });
// }
//
// removeRoom(): Observable<RoomDetails[]> {
//   const id = 101;
//   return this.http.delete<RoomDetails[]>(`http://localhost:8000/api/v1/rooms/${ id }`);
// }
//
// editRoom(): Observable<RoomDetails[]> {
//   return this.http.put<RoomDetails[]>("http://localhost:8000/api/v1/rooms", {
//     roomType: "Double",
//     roomPrice: 123,
//     roomNumber: 103,
//     roomCapacity: 2,
//     roomPhoto: "https://plus.unsplash.com/premium_photo-1676823552681-bf1d1135fa2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     checkIn: new Date("2022-01-01"),
//     checkOut: new Date("2022-01-02"),
//     rating: 0.0
//   });
// }
