import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveWeatherComponent } from './live-weather.component';

const routes: Routes = [
  { path: '', component: LiveWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveWeatherRoutingModule { }
