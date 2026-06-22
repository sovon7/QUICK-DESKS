import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live-weather',
  templateUrl: './live-weather.component.html',
  styleUrls: ['./live-weather.component.scss']
})
export class LiveWeatherComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
