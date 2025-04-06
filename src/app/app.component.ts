import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import {LOCAL_STORAGE_TOKEN} from './localStorage.token';
import {UserService} from './user.service';
import {GeneralService} from './services/general.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent { // , AfterViewInit {
  title: string = 'angularSample';
  role: string = "Guest"; // "Admin", "User", "Guest", "Unauthorized"

  constructor(
    @Optional() private loggerService: LoggerService, // Optional is used to make the service optional
    // most useful in case of switching between dev and prod environments
    @Inject(LOCAL_STORAGE_TOKEN) private localStorage: Storage,
    private generalService: GeneralService,
    private router: Router
  ) {
    // this.router.events.subscribe(event => {
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(
      event => {
        console.log("Navigation started ", event);
      }
    );

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      event => {
        console.log("Navigation ended ", event);
      }
    );

    this.localStorage?.setItem("hello", "hi");
    this.loggerService?.log("App component created");
  }

  // @ViewChild('user', { read: ViewContainerRef })
  // vcr!: ViewContainerRef;

  @ViewChild('name', { static: true })
  name!: ElementRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 39;
  // }

  // ngOnInit(): void {
  //   this.name.nativeElement.innerText = "Overlook Hotel"; // modifying HTML tag content with property that's not marked with @Input
  // }

  // userForm: FormGroup;
  // responseMessage: string = '';
  //
  // constructor(private fb: FormBuilder, private userService: UserService) {
  //   this.userForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //   });
  // }
  //
  // // onSubmit() {
  // //   if (this.userForm.valid) {
  // //     console.log('Form Submitted:', this.userForm.value);
  // //   } else {
  // //     console.log('Form is invalid');
  // //   }
  // // }
  //
  // async onSubmit() {
  //   if (this.userForm.valid) {
  //     try {
  //       const response = await this.userService.submitForm(this.userForm.value);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   } else {
  //     console.log('Please fill in all required fields correctly.');
  //   }
  // }
}

