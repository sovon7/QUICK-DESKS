import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../auth/services/auth.service';

interface Tile {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  buttonLabel: string;
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
      id: 'clock',
      title: 'Clock',
      description: 'View time & set alarms',
      icon: '🕐',
      route: '/clock',
      color: '#64B5F6',
      buttonLabel: 'Open Clock'
    },
    {
      id: 'calculator',
      title: 'Calculator',
      description: 'Perform quick calculations',
      icon: '🧮',
      route: '/calculator',
      color: '#2196F3',
      buttonLabel: 'Open Calculator'
    },
    {
      id: 'jokes',
      title: 'Jokes',
      description: 'Browse fun jokes',
      icon: '😂',
      route: '/jokes',
      color: '#FF9800',
      buttonLabel: 'Open Jokes'
    },
    {
      id: 'notepad',
      title: 'Notepad',
      description: 'Save your important notes',
      icon: '📝',
      route: '/notepad',
      color: '#F5F5F5',
      buttonLabel: 'Open Notepad'
    },
    {
      id: 'game',
      title: 'Fun Game',
      description: 'Play a quick game',
      icon: '🎮',
      route: '/game',
      color: '#4CAF50',
      buttonLabel: 'Play Game'
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
