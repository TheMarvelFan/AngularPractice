import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomsComponent} from './rooms.component';
import {AddRoomComponent} from './add-room/add-room.component';
import {RoomsBookingComponent} from './rooms-booking/rooms-booking.component';
import {roomGuard} from './guards/room.guard';

const routes: Routes = [
  {
    path: "",
    component: RoomsComponent,
    canActivateChild: [
      roomGuard // this is a guard that will be applied to all child routes of the RoomsComponent, but not to the RoomsComponent itself
    ],
    children: [
      {
        path: "add",
        component: AddRoomComponent
      },
      // {
      //   path: ":roomNumber",
      //   component: RoomsBookingComponent,
      //   data: { renderMode: 'no-prerender' }
      // }
    ]
  }
  // {
  //   path: "rooms/add", // this has to be provided above here because Angular matches routes from top to bottom, and
  //   // the word "add" will be considered as a room number that you are trying to book, but it will give NaN
  //   component: AddRoomComponent
  // },
  // {
  //   path: "rooms/:roomNumber",
  //   component: RoomsBookingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // use forChild() instead of forRoot() in feature modules
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
