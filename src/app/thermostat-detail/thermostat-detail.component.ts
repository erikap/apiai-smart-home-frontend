import { Component, OnInit, Input } from '@angular/core';
import { Thermostat } from '../thermostat';

@Component({
  selector: 'app-thermostat-detail',
  templateUrl: 'thermostat-detail.component.html',
  styleUrls: ['thermostat-detail.component.sass']
})
export class ThermostatDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input()
  thermostat: Thermostat;

  increase(thermostat: Thermostat): void {
    thermostat.attributes.temperature++;
  };
  decrease(thermostat: Thermostat): void {
    thermostat.attributes.temperature--;
  };


}
