import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ThermostatDetailComponent } from './thermostat-detail/thermostat-detail.component';
import { ThermostatsComponent } from './thermostats/thermostats.component';
import { ThermostatService } from './thermostat.service';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SmartChatService } from './smart-chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ThermostatDetailComponent,
    ThermostatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ThermostatService,
    SmartChatService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
