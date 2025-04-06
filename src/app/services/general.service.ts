import {Inject, Injectable} from '@angular/core';
import {RouteConf} from './routeConfig.service';
import {RouteConfig} from './routeConfig';

@Injectable({
  providedIn: 'any'
})
export class GeneralService {

  constructor(@Inject(RouteConf) private configToken: RouteConfig) {
    console.log('General service');
    console.log(this.configToken);
  }
}
