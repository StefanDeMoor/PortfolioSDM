import { Component } from '@angular/core';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { HomeComponent } from './features/home/pages/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
