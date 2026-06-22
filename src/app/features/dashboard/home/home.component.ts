import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../services/auth.service';

interface Tile {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  tiles: Tile[] = [
    {
      id: 'weather',
      title: 'Weather',
      description: 'Check the latest forecast',
      icon: '☁️',
      route: '/weather',
      color: '#2196F3'
    },
    {
      id: 'jokes',
      title: 'Jokes',
      description: 'Browse fun jokes',
      icon: '😂',
      route: '/jokes',
      color: '#FF9800'
    },
    {
      id: 'notepad',
      title: 'Notepad',
      description: 'Save your important notes',
      icon: '📝',
      route: '/notepad',
      color: '#F5F5F5'
    },
    {
      id: 'game',
      title: 'Fun Game',
      description: 'Play a quick game',
      icon: '🎮',
      route: '/game',
      color: '#4CAF50'
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  navigateToTile(tile: Tile): void {
    this.router.navigate([tile.route]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
