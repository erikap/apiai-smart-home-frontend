import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, URLSearchParams } from '@angular/http';

import { Thermostat } from './thermostat';

@Injectable()
export class ThermostatService {

  constructor(private http: Http) { }

  getThermostats(): Promise<Thermostat[]> {
    return this.http.get('/api/thermostats').toPromise()
    .then(response => response.json().data as Thermostat[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
