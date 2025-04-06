import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {RoomsComponent} from './rooms/rooms.component';
import {FourohfourComponent} from './fourohfour/fourohfour.component';
import {RoomsBookingComponent} from './rooms/rooms-booking/rooms-booking.component';
import {AddRoomComponent} from './rooms/add-room/add-room.component';
import {LoginComponent} from './login/login.component';
import {authGuard, loginGuard} from './guards/login.guard';

const routes: Routes = [
  {
    path: "employees",
    loadChildren: () =>
      import("./employee/employee.module").then(m => m.EmployeeModule),
    canActivate: [loginGuard]
  },
  {
    path: "rooms",
    loadChildren: () => // lazy loading the RoomsModule
      import('./rooms/rooms.module').then(m => m.RoomsModule),
    // canActivate: [loginGuard]
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'booking/:roomId',
    loadChildren: () =>
      import('./booking/booking.module').then(m => m.BookingModule),
    // canActivate: [loginGuard],
    // canMatch: [authGuard]
  },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { // this must be the last route, otherwise it will match all routes
    path: "**", // this is a wildcard route
    component: FourohfourComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
