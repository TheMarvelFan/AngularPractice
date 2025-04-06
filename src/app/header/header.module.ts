import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {GeneralService} from '../services/general.service';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent] // necessary when component is used outside of scope of its module
})
export class HeaderModule {
  constructor(private generalService: GeneralService) { // this will not get a new instance of the service because it is not lazy loaded
  }
}
