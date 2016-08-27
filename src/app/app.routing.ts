import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThermostatsComponent }      from './thermostats/thermostats.component';

const appRoutes: Routes = [
  {
    path: 'thermostats',
    component: ThermostatsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
