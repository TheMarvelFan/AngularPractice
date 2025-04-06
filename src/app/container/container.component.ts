import {AfterContentChecked, AfterContentInit, Component, ContentChild, Host} from '@angular/core';
import {EmployeeComponent} from '../employee/employee.component';
import {RoomsService} from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit, AfterContentChecked {
  employeeName: string = "";

  @ContentChild(EmployeeComponent)
  employee!: EmployeeComponent;

  ngAfterContentInit(): void {
    console.log("Employee Name: " + this.employee.name);
    this.employee.name = "Jane Doe";
  }

  ngAfterContentChecked(): void {
    console.log("Employee Name: " + this.employee.name);
  }

  constructor(@Host() private roomsService: RoomsService) { // @Host() is used to inject the service from the parent component
    // to all children component

  }

}
