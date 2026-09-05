import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule], 
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);

  isAuthRoute(): boolean {
    const url = this.router.url;
    return url === '/login' || url === '/crear-cuenta' || url.startsWith('/login') || url.startsWith('/crear-cuenta');
  }
}
