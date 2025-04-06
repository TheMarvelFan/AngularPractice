import { Pipe, PipeTransform } from '@angular/core';
import {RoomDetails} from './Rooms';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomDetails[] | null, price: number): RoomDetails[] {
    return rooms?.filter((room) => room.roomPrice <= price) || [];
  }

}
