import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageCardComponent } from "../home-page-card/home-page-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homepage';
}
