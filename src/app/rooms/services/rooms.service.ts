import {Inject, Injectable, SkipSelf} from '@angular/core';
import { RoomDetails } from '../Rooms';
import { environment } from '../../../environments/environment.development';
import {APP_SERVICE_CONFIG} from '../../config/app.config.service';
import { AppConfig } from '../../config/app.config.interface';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable, shareReplay} from 'rxjs';
import {GeneralService} from '../../services/general.service';

@Injectable({
  providedIn: 'root' // this registers the service inside angular.json providers array, and also makes it a singleton
})
export class RoomsService {
  roomList: RoomDetails[] = [
    // {
    //   roomType: "Single",
    //   roomPrice: 100,
    //   roomNumber: 101,
    //   roomCapacity: 1,
    //   roomPhoto: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   checkIn: new Date("2021-01-01"),
    //   checkOut: new Date("2021-01-02"),
    //   rating: 3.5
    // },
    // {
    //   roomType: "Double",
    //   roomPrice: 150,
    //   roomNumber: 102,
    //   roomCapacity: 2,
    //   roomPhoto: "https://plus.unsplash.com/premium_photo-1676823552681-bf1d1135fa2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   checkIn: new Date("2024-03-06"),
    //   checkOut: new Date("2024-05-22"),
    //   rating: 4.5
    // },
    // {
    //   roomType: "Suite",
    //   roomPrice: 200,
    //   roomNumber: 103,
    //   roomCapacity: 4,
    //   roomPhoto: "https://plus.unsplash.com/premium_photo-1676823553364-a3626c995214?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   checkIn: new Date("2023-09-10"),
    //   checkOut: new Date("2023-09-20"),
    //   rating: 5.0
    // },
    // {
    //   roomType: "Penthouse",
    //   roomPrice: 300,
    //   roomNumber: 104,
    //   roomCapacity: 6,
    //   roomPhoto: "https://plus.unsplash.com/premium_photo-1676823553372-2b4ddb189d31?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   checkIn: new Date("2022-12-25"),
    //   checkOut: new Date("2023-01-01"),
    //   rating: 2.9
    // },
    // {
    //   roomType: "Penthouse",
    //   roomPrice: 300,
    //   roomNumber: 105,
    //   roomCapacity: 6,
    //   roomPhoto: "https://plus.unsplash.com/premium_photo-1676823570343-6d36d7d1b564?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   checkIn: new Date("2022-11-25"),
    //   checkOut: new Date("2023-10-01"),
    //   rating: 3.7
    // }
  ];

  // marking with '$' to indicate that it is an observable
  getRooms$: Observable<RoomDetails[]>;

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient,
    // @SkipSelf()
    // private generalService: GeneralService // this will get a new instance of the service because it is lazy loaded
  ) {
    console.log(this.config.apiUrl);
    console.log("Rooms service initialized");
    // console.log(environment.apiUrl); // manual use of environment variable is tiring, instead use the config object
    // use value based dependency injection to inject the config object

    this.getRooms$ = this.http.get<RoomDetails[]>('/api/v1/rooms') //, {
      // headers: {
      //   "token": "123123"
      // }})
    .pipe( // pipe method is used to chain multiple operators
      // shareReplay operator to cache the response and share it with multiple subscribers
      shareReplay(1)
    );

  }

  // getRooms(): RoomDetails[] {
  getRooms() {
    // return this.roomList;
    const headers = new HttpHeaders({
      "token": "123123"
    });
    return this.http.get<RoomDetails[]>('/api/v1/rooms', {
      headers
    });
  }

  addRoom(room: RoomDetails) {
    return this.http.post<RoomDetails[]>('/api/v1/rooms', room); //, {
    //   headers: {
    //     "token": "123123"
    //   }
    // });
  }

  editRoom(newRoom: RoomDetails) {
    return this.http.put<RoomDetails[]>('/api/v1/rooms', newRoom);
  }

  deleteRoom(id: number) {
    return this.http.delete<RoomDetails[]>(`/api/v1/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest("GET", "https://jsonplaceholder.typicode.com/photos", {
      reportProgress: true
    });

    return this.http.request(request);
  }
}
