import { CanDeactivateFn } from '@angular/router';
import {BookingComponent} from '../booking.component';
import {inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
  const snackBar = inject(MatSnackBar);
  if (component.bookingForm.pristine) {
    return true;
  } else {
    snackBar.open("You have unsaved changes. Do you want to leave?", "Leave");
    return false;
  }
};
