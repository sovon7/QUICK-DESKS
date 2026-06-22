import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Tile {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tiles: Tile[] = [
    {
      id: 'weather',
      title: 'Weather',
      description: 'Live weather updates',
      icon: '🌤️',
      route: '/weather'
    },
    {
      id: 'jokes',
      title: 'Jokes',
      description: 'Funny jokes collection',
      icon: '😂',
      route: '/jokes'
    },
    {
      id: 'notepad',
      title: 'Notepad',
      description: 'Quick notes',
      icon: '📝',
      route: '/notepad'
    },
    {
      id: 'game',
      title: 'Fun Game',
      description: 'Play and have fun',
      icon: '🎮',
      route: '/game'
    }
  ];

  constructor(private router: Router) {}

  navigateToTile(tile: Tile) {
    this.router.navigate([tile.route]);
  }
}
