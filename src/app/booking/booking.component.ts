import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../services/general.service';
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
import {BookingService} from './booking.service';
import {exhaustMap, mergeMap, switchMap} from 'rxjs';
import {CustomValidator} from './validators/custom-validator';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  bookingForm !: FormGroup;

  constructor(
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const roomId = this.router.snapshot.paramMap.get('roomId');
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({
        value: roomId,
        disabled: true
      }, {
        validators: [
          Validators.required
        ]
      }), // this and
      guestEmail: ['', {
        updateOn: "blur", // for lazily updating the field, so that actively listening to changes won't cause a slowdown
        validators: [Validators.required, Validators.email]
      }], // this is the same
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['',
        {
          // updateOn: "blur", // blur event will be called when the user clicks outside the field
          updateOn: "blur",
        }
      ],
      guestName: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        CustomValidator.validateName,
        CustomValidator.validateSpecialChars("~")
      ]],
      address: this.formBuilder.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        zipCode: ['', [Validators.required]]
      }),
      guests: this.formBuilder.array([
        this.addGuestControl()
      ]),
      terms: [false, [Validators.requiredTrue]],
    }, {
      updateOn: "blur", // property will be applied to all the fields in the form
      // there is another property called updateOn: "submit" which will be applied to the form as a whole
      // "updateOn: change" is the default value
      // for 10 fields marked with blur: overall checks will run 10 times
      // for 10 fields marked with change: overall checks will run n * 10 times, where n is the number of times any field is edited time
      // for 10 fields marked with submit: overall checks will run only once
      validators: [CustomValidator.validateCheckinCheckout]
    });
    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe(data => { // for each value change (key press) in the form, this will be called
    //   console.log(data);
    // });

    // this.bookingForm.valueChanges.pipe(
    //   mergeMap(data => { // sends different requests for each value change
    //     return this.bookingService.bookRoom(data)
    //   })
    // ).subscribe(data => {
    //   console.log(data);
    // });

    // this.bookingForm.valueChanges.pipe(
    //   switchMap(data => { // sends different requests for each value change, but cancels request if not executed when
    //     // it detects value change again
    //     return this.bookingService.bookRoom(data)
    //   })
    // ).subscribe(data => {
    //   console.log(data);
    // });

    this.bookingForm.valueChanges.pipe(
      exhaustMap(data => { // sends different requests for each value change, but waits for previous request to complete
        return this.bookingService.bookRoom(data)
      })
    ).subscribe(data => {
      console.log(data);
    });

    // concatMap is used when order of request matters
  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  bookRoom() {
    // console.log(this.bookingForm.value); // using form value, we cannot access disabled fields

    console.log(this.bookingForm.getRawValue()); // using getRawValue, we can access disabled fields
    this.deletePassport();
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((response) => {
    //   console.log(response);
    // });
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      },
      guests: [
        {
          name: '',
          age: ''
        }
      ],
      terms: false
    });
  }

  addGuest() {
    this.guests.push(
      this.addGuestControl()
    );
  }

  getBookingData() {
    // this.bookingForm.setValue({
    //   roomId: '2',
    //   guestEmail: 'a@a.com',
    //   checkInDate: new Date('2023-10-01'),
    //   checkOutDate: new Date('2023-10-02'),
    //   bookingStatus: "confirmed",
    //   bookingAmount: 3432.3,
    //   bookingDate: new Date('2023-10-01'),
    //   mobileNumber: '9843924',
    //   guestName: 'hdhsai',
    //   address: {
    //     addressLine1: 'qwewqe',
    //     // addressLine2: 'asad', // set value makes it mandatory to provide values for all fields of the form
    //     // patchValue makes it optional
    //     city: 'sdads',
    //     state: 'dsads',
    //     country: 'dsad',
    //     zipCode: 1231
    //   },
    //   guests: [
    //     {
    //       name: 'fdfjdds',
    //       age: 21
    //     }
    //   ],
    //   terms: false
    // });

    this.bookingForm.patchValue({ // both setValue and patchValue are used to set form data fetched from backend (usually)
      // roomId: '2',
      guestEmail: 'a@a.com',
      checkInDate: new Date('2023-10-01'),
      checkOutDate: new Date('2023-10-02'),
      bookingStatus: "confirmed",
      bookingAmount: 3432.3,
      bookingDate: new Date('2023-10-01'),
      mobileNumber: '9843924',
      guestName: 'hdhsai',
      address: {
        addressLine1: 'qwewqe',
        // addressLine2: 'asad', // set value makes it mandatory to provide values for all fields of the form
        // patchValue makes it optional
        city: 'sdads',
        state: 'dsads',
        country: 'dsad',
        zipCode: 1231
      },
      guests: [
        {
          name: 'fdfjdds',
          age: 21
        }
      ],
      terms: false
    });
  }

  addPassport() {
    this.bookingForm.addControl(
      "passport",
      new FormControl("")
    );
  }

  addGuestControl() {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]]
    });
  }

  deletePassport() {
    if (this.bookingForm.get("passport")) {
      this.bookingForm.removeControl("passport");
    }
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
}

// export class Booking {
//   roomId: string;
//   guestEmail: string;
//   checkInDate: Date;
//   checkOutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: Guest[];
// }
