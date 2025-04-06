import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  standalone: false,
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit {
  roomNumber: number | null = null;

  roomNumber$ !: Observable<number | null>;

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    // this.roomNumber$ = this.router.params.pipe(
    //   map(params => parseInt(params['roomNumber']))
    // );
    this.roomNumber$ = this.router.paramMap.pipe(
      map(params => {
        const num = Number(params.get('roomNumber'));
        if (!isNaN(num) && num !== null) {
          return num;
        } else {
          return null; // Handle invalid roomNumber properly
        }
      })
    );
    console.log("roomNumber:", this.roomNumber$);
    // this.router.params.subscribe(params => {
    //   this.roomNumber = parseInt(params['roomNumber']);
    //   console.log("Room Id: ", params['roomNumber']);
    // });
    // this.router.paramMap.subscribe(params => { // paramMap for handling multiple query parameters
    //   parseInt(params.get("roomNumber")!); // accessing single query parameter
    //   // exclamatory mark is used to tell TypeScript that the value will not be null
    // });
  }
}
