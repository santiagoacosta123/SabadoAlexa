<<<<<<< Updated upstream
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule], 
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('administrador');
}

=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {
}
>>>>>>> Stashed changes
