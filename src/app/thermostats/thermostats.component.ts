import { Component, OnInit } from '@angular/core';
import { Thermostat } from '../thermostat';
import { ThermostatService } from '../thermostat.service';

@Component({
  selector: 'app-thermostats',
  templateUrl: 'thermostats.component.html',
  styleUrls: ['thermostats.component.sass']
})
export class ThermostatsComponent implements OnInit {

  thermostats: Thermostat[];

  constructor(private thermostatService: ThermostatService) { }

  ngOnInit(): void {
    this.getThermostats();    
  }
  
  getThermostats(): void {
    this.thermostatService.getThermostats().then(thermostats => this.thermostats = thermostats);
  }

}
