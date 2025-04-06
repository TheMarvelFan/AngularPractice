import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import {RoomsService} from './services/rooms.service';
import {GeneralService} from '../services/general.service';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {APP_SERVICE_CONFIG} from '../config/app.config.service';
import {provideHttpClient} from '@angular/common/http';
import {RouteConf} from '../services/routeConfig.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsComponent],
      providers: [
        RoomsService,
        GeneralService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: APP_SERVICE_CONFIG,
          useValue: {
            apiUrl: "https://api.example.com",
          }
        },
        {
          provide: RouteConf,
          useValue: {
            title: "Test Title",
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
