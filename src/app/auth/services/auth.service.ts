import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  firstName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly DUMMY_CREDENTIALS = {
    email: 'demo@quickdesk.com',
    password: 'Demo@123',
    firstName: 'Sovon'
  };

  private readonly USER_STORAGE_KEY = 'quickdesk_user';
  private userSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());

  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor() {}

  /**
   * Login with email and password
   * @param email User email
   * @param password User password
   * @returns true if login successful, false otherwise
   */
  login(email: string, password: string): boolean {
    if (email === this.DUMMY_CREDENTIALS.email && password === this.DUMMY_CREDENTIALS.password) {
      const user: User = {
        id: '1',
        email: this.DUMMY_CREDENTIALS.email,
        firstName: this.DUMMY_CREDENTIALS.firstName
      };
      localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));
      this.userSubject.next(user);
      return true;
    }
    return false;
  }

  /**
   * Register a new user (currently just logs in with dummy credentials)
   * @param firstName User first name
   * @param email User email
   * @param password User password
   * @returns true if registration successful
   */
  register(firstName: string, email: string, password: string): boolean {
    // For demo purposes, just accept registration and login
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      firstName
    };
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));
    this.userSubject.next(user);
    return true;
  }

  /**
   * Logout current user
   */
  logout(): void {
    localStorage.removeItem(this.USER_STORAGE_KEY);
    this.userSubject.next(null);
  }

  /**
   * Get current logged-in user
   * @returns Current user or null
   */
  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  /**
   * Check if user is logged in
   * @returns true if user is logged in
   */
  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  /**
   * Get user from localStorage
   * @returns User from storage or null
   */
  private getUserFromStorage(): User | null {
    const userStr = localStorage.getItem(this.USER_STORAGE_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  /**
   * Get dummy credentials for testing (remove in production)
   */
  getDummyCredentials() {
    return {
      email: this.DUMMY_CREDENTIALS.email,
      password: this.DUMMY_CREDENTIALS.password
    };
  }
}
