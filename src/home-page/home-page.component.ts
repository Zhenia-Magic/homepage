import { Component } from '@angular/core';
import { HomePageCardComponent } from "../home-page-card/home-page-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomePageCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
