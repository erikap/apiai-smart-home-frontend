import { Component, OnInit, Input } from '@angular/core';
import { Thermostat } from '../thermostat';
import { ThermostatService } from '../thermostat.service';

@Component({
  selector: 'app-thermostat-detail',
  templateUrl: 'thermostat-detail.component.html',
  styleUrls: ['thermostat-detail.component.sass']
})
export class ThermostatDetailComponent implements OnInit {

  constructor(private thermostatService: ThermostatService) { }

  ngOnInit() { }

  @Input()
  thermostat: Thermostat;

  increase(thermostat: Thermostat): void {
    thermostat.attributes.temperature++;
    this.thermostatService.update(thermostat);
  };
  decrease(thermostat: Thermostat): void {
    thermostat.attributes.temperature--;
    this.thermostatService.update(thermostat);
  };


}
