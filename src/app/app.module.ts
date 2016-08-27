import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ThermostatDetailComponent } from './thermostat-detail/thermostat-detail.component';
import { ThermostatsComponent } from './thermostats/thermostats.component';
import { ThermostatService } from './thermostat.service';

@NgModule({
  declarations: [
    AppComponent,
    ThermostatDetailComponent,
    ThermostatsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    ThermostatService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
