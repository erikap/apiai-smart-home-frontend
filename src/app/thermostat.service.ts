import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Headers } from '@angular/http';

import { Thermostat } from './thermostat';

@Injectable()
export class ThermostatService {

  constructor(private http: Http) { }

  getThermostats(): Promise<Thermostat[]> {
    return this.http.get('/api/thermostats').toPromise()
    .then(response => response.json().data as Thermostat[])
    .catch(this.handleError);
  }

  update(thermostat: Thermostat): Promise<Thermostat> {
    const url = `/api/thermostats/${thermostat.id}`;
    const headers = new Headers({'Content-Type': 'application/vnd.api+json'});
    return this.http
      .patch(url, JSON.stringify({ data: thermostat }), {headers: headers})
      .toPromise()
      .then(() => thermostat)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
