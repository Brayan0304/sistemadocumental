import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Importar el componente autónomo


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],  // Agregar DashboardComponent a los imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-home-dashboard';
}
