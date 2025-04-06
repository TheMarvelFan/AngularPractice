import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from './config/app.config.service';
import {LOCAL_STORAGE_TOKEN, localStorageFactory} from './localStorage.token';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {requestInterceptor} from './request.interceptor';
import { DemoRoomsComponent } from './demo-rooms/demo-rooms.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './email-validator/email-validator.directive';
import {RouteConf} from './services/routeConfig.service';
import {GlobalErrorHandler} from './GlobalErrorHandler';
// import {RoomsModule} from './rooms/rooms.module';
// import {InitService} from './init.service'; // deprecated syntax
// function initFactory(initService: InitService) {
//
// }

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent, component can only be registered in one module
    ContainerComponent,
    // EmployeeComponent,
    FormComponent,
    TemplateDrivenFormComponent,
    DemoRoomsComponent,
    AppNavComponent,
    FourohfourComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    // RoomsModule, // this is because imports are handled sequentially, and AppRoutingModule is the last import
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule, // putting this here prevents child routes to be matched with the 404 wildcard route
    // RoomsModule // always register feature modules before AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    {
      provide: APP_SERVICE_CONFIG, // register the APP_SERVICE_CONFIG InjectionToken
      useValue: APP_CONFIG
    },
    {
      provide: LOCAL_STORAGE_TOKEN,
      useFactory: localStorageFactory
    },
    {
      provide: RouteConf,
      useValue: {
        title: "Home"
      }
    },
    provideHttpClient(
      // options

      // By default, HttpClient uses the XMLHttpRequest API to make requests.
      // The withFetch feature switches the client to use the fetch API instead.
      // withFetch()

      // The withJsonp feature adds support for JSONP requests, that is, Json with Padding.
      // withJsonp()

      withInterceptors([
        requestInterceptor // these are like middleware functions for frontend that can be used to modify the request before it is sent
      ])
    ),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
