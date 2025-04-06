import {AbstractControl, FormGroup} from '@angular/forms';

export class CustomValidator {

  static validateName(control: AbstractControl) { // abstract control is base class for all form controls
    const val = control.value as string;
    if (val.includes('test')) {
      return {
        invalidName: true
      };
    }
    return  null; // default return when no errors
  }

  static validateSpecialChars(char: string) {

    return (control: AbstractControl) => {
      const val = control.value as string;
      if (val.includes(char)) {
        return {
          invalidSpecialChars: true
        };
      }
      return null;
    }
  }

  static validateCheckinCheckout(control: FormGroup) {
    const checkInDate = new Date(control.get('checkInDate')?.value);
    const checkOutDate = new Date(control.get('checkOutDate')?.value);

    const dateDiff = checkOutDate.getTime() - checkInDate.getTime();

    const diffDays = Math.ceil(dateDiff / (1000 * 3600 * 24));

    console.log(dateDiff);
    console.log(diffDays);

    if (diffDays < 1) {
      control.get('checkInDate')?.setErrors({ // setting form level error to control
        invalidCheckinCheckout: true
      });
      return {
        invalidCheckinCheckout: true
      };
    }

    return null;
  }
}
