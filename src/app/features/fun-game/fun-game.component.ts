import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fun-game',
  templateUrl: './fun-game.component.html',
  styleUrls: ['./fun-game.component.scss']
})
export class FunGameComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
