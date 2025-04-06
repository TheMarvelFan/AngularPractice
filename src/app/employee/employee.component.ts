import {Component, Self} from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
  // providers: [RoomsService] // this will create a new instance of the service for this component, even with providedIn: 'root'
})
export class EmployeeComponent {

  name: string = "John Doe";

  // constructor(@Self() private roomsService: RoomsService) { // self decorator will only look for the service in the current component
    // and not in the parent component. If it is not present, it throws an error
  constructor(private roomsService: RoomsService) {

  }
}
