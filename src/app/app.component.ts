import { Component , OnInit } from '@angular/core';
import { Thermostat } from './thermostat';
import { ThermostatService } from './thermostat.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass'],
  providers: [ThermostatService]
})
export class AppComponent implements OnInit {
  thermostats: Thermostat[];

  constructor(private thermostatService: ThermostatService) { }

  ngOnInit(): void {
    this.getThermostats();    
  }
  
  getThermostats(): void {
    this.thermostatService.getThermostats().then(thermostats => this.thermostats = thermostats);
  }
}
