import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jokes-funny',
  templateUrl: './jokes-funny.component.html',
  styleUrls: ['./jokes-funny.component.scss']
})
export class JokesFunnyComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
