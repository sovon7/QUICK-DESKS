import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveWeatherRoutingModule } from './live-weather-routing.module';
import { LiveWeatherComponent } from './live-weather.component';

@NgModule({
  declarations: [LiveWeatherComponent],
  imports: [CommonModule, LiveWeatherRoutingModule]
})
export class LiveWeatherModule { }
