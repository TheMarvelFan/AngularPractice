import {ErrorHandler} from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler { // we can implement classes when they have only method declarations
  handleError(error: any): void {
    console.log('Global error handler: ', error);
  }
}
