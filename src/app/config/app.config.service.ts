import { InjectionToken } from '@angular/core';
import {environment} from '../../environments/environment.development';
import { AppConfig } from './app.config.interface';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.service.config');

export const APP_CONFIG: AppConfig = {
  apiUrl: environment.apiUrl,
}
