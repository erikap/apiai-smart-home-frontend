import { Component } from '@angular/core';
import { Thermostat } from './thermostat';

const THERMOSTATS: Thermostat[] = [
  { id: 11, temperature: 20, location: 'Living room' },
  { id: 12, temperature: 21, location: 'Kitchen' },
  { id: 13, temperature: 17, location: 'Bedroom' }  
];
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass']
})
export class AppComponent {
  thermostats = THERMOSTATS;

  increase(thermostat: Thermostat): void {
    thermostat.temperature++;
  };
  decrease(thermostat: Thermostat): void {
    thermostat.temperature--;
  };
}
