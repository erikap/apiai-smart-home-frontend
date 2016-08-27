import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ThermostatsComponent } from './thermostats/thermostats.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'thermostats',
    component: ThermostatsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
