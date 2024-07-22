import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { CardModule } from "primeng/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page-card',
  standalone: true,
  imports: [
    Button,
    CardModule,
    RouterLink
  ],
  templateUrl: './home-page-card.component.html',
  styleUrl: './home-page-card.component.css'
})
export class HomePageCardComponent {

}
