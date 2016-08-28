import { Injectable } from '@angular/core';

import { Thermostat } from './thermostat';
import { THERMOSTATS } from './mock-thermostats';

@Injectable()
export class ThermostatService {

  constructor() { }

  getThermostats(): Promise<Thermostat[]> {
    return Promise.resolve(THERMOSTATS);
  }

}
