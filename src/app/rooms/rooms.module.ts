import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {RoomsComponent} from './rooms.component';
import {RoomDetailTableComponent} from '../room-detail-table/room-detail-table.component';
import {RoomsBookingComponent} from './rooms-booking/rooms-booking.component';
import {AddRoomComponent} from './add-room/add-room.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderModule} from '../header/header.module';
import {RouteConf} from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailTableComponent,
    RoomsBookingComponent,
    AddRoomComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: RouteConf,
      useValue: {
        title: "Rooms"
      }
    }
  ]
})
export class RoomsModule { }
