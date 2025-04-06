import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input, OnDestroy,
  OnInit,
  QueryList, SkipSelf,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { RoomDetails, Rooms} from './Rooms';
import {HeaderComponent} from '../header/header.component';
import {RoomsService} from './services/rooms.service';
import {catchError, map, Observable, of, Subject, Subscription} from 'rxjs';
import {HttpEventType} from '@angular/common/http';
import {GeneralService} from '../services/general.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked { // , DoCheck {
  hotelName: string = "Hilton hotel";
  numberOfRooms: number = 100;
  hideRooms: boolean = true;

  roomList: RoomDetails[] = [];

  // building custom Observable through RxJs
  stream = new Observable<string>(observer => {
    observer.next("user1"); // emitting new data to all subscribers
    observer.next("user2"); // emitting new data to all subscribers
    observer.next("user3"); // emitting new data to all subscribers
    observer.complete(); // stream completes
    // observer.error("error"); // for catching errors in observables
  });

  subscription !: Subscription;
  rooms$: Observable<RoomDetails[]> | undefined;

  roomsCount$: Observable<number> | undefined;

  error$: Subject<string> = new Subject<string>();

  getError$ = this.error$.asObservable();

  constructor(
    @SkipSelf() private roomsService: RoomsService,
    @SkipSelf() private generalService: GeneralService
  ) { // SkipSelf is used to skip the current component and
    // look for the service in the parent component

  }

  ngOnInit(): void {
    this.roomsCount$ = this.roomsService.getRooms$.pipe(
      map(rooms => rooms.length)
    );
    this.rooms$ = this.roomsService.getRooms$.pipe(
      catchError(err => {
        console.log(err.message());
        this.error$.next(err);
        return of([]);
      })
    );
    this.roomsService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Request sent");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Response header received");
          break;
        }
        case HttpEventType.DownloadProgress: {
          const kbLoaded = Math.round(event.loaded / 1024);
          console.log(`Download in progress: ${kbLoaded}Kb loaded`);
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });

    this.stream.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => console.log("stream completed"),
      error: (error) => console.error(error)
    });

    this.stream.subscribe((data) => {
      console.log(data);
    });

    // console.log(this.headerComponent);
    // this.roomList = this.roomsService.roomList;
    // this.roomList = this.roomsService.getRooms();
    // console.log(this.roomsService.getRooms());

    // on the backend, angular used RxJs to make http requests, so the data is not available immediately
    // it is a push based system, so the data will be pushed to the component when it is available
    // once subscribed, if the data changes on the backend, the data will be updated in the component as well
    // without making another http request

    // this.roomsService.getRooms$.subscribe((rooms) => {
    //     this.roomList = rooms;
    // });
  }

  selectRoom(room: RoomDetails) {
    this.selectedRoom = room;
    console.log("Room selected: ", room);
  }

  selectedRoom!: RoomDetails;

  rooms: Rooms = {
    availableRooms: 20,
    bookedRooms: 30,
    totalRooms: 55
  };

  @ViewChild(HeaderComponent) // in this case, the header component will give undefined on line 21, but will load on line 121
  // @ViewChild(HeaderComponent, { static: true })
  headerComponent?: HeaderComponent;

  @ViewChildren(HeaderComponent) // static property cannot be used with ViewChildren
  headerComponents?: QueryList<HeaderComponent>;

  // this happens because js is synchronous, so the header component is not loaded yet (time taking process)
  // ngAfterViewInit is called after the view is initialized, so it will be called after the header component is loaded
  // the same behavior can be achieved by setting static to true in the ViewChild decorator
  // this is basically like saying "await" in js
  // after the promise is resolved (header component loaded), the code will continue to run

  title: string = "Room List: ";

  toggle() : void {
    this.title = "Showing all rooms: ";
    this.hideRooms = !this.hideRooms;
  }

  addRoom() : void {
    const room: RoomDetails = {
      roomType: "Double",
      roomPrice: 123,
      roomNumber: 34,
      roomCapacity: 2,
      roomPhoto: "https://plus.unsplash.com/premium_photo-1676823552681-bf1d1135fa2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkIn: new Date("2022-01-01"),
      checkOut: new Date("2022-01-02"),
      rating: 0.0
    };

    this.roomsService.addRoom(room).subscribe(data => {
      this.roomList = data;
    });

    // this.roomList.push(room); // not how we do things in angular. We use immutability, so we create a new object to be rendered
    // mostly because of state management
    // this.roomList = [...this.roomList, room];
  }

  editRoom() : void {
    const newRoom: RoomDetails = {
      roomType: "Double",
      roomPrice: 101,
      roomNumber: 103,
      roomCapacity: 2,
      roomPhoto: "https://plus.unsplash.com/premium_photo-1676823552681-bf1d1135fa2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkIn: new Date("2022-01-01"),
      checkOut: new Date("2022-01-02"),
      rating: 3.0
    };

    this.roomsService.editRoom(newRoom).subscribe(data => {
      this.roomList = data;
    });
  }

  removeRoom() : void {
    this.roomsService.deleteRoom(6).subscribe(data => {
      this.roomList = data;
    });
  }

  // ngDoCheck(): void { // try to avoid DoCheck as it is called very frequently, and never use it with ngOnChanges
  //   console.log("Do check called");
  // }
  ngAfterViewInit() { // works after the child components and the component itself is loaded
    console.log(this.headerComponent);
    console.log(this.headerComponents?.last.title);
    // this.headerComponents?.get(0).title = "Rooms";
  }

  ngAfterViewChecked(): void {
    if (this.headerComponent) {
      this.headerComponent.title = "Rooms";
    }
  }

  priceFilter = new FormControl(0);

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
