/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ThermostatService } from './thermostat.service';

describe('Service: Thermostat', () => {
  beforeEach(() => {
    addProviders([ThermostatService]);
  });

  it('should ...',
    inject([ThermostatService],
      (service: ThermostatService) => {
        expect(service).toBeTruthy();
      }));
});
