import { Component } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";
import { SplitterModule } from "primeng/splitter";

@Component({
  selector: 'app-power-bi-app',
  standalone: true,
  imports: [SplitterModule],
  templateUrl: './power-bi-app.component.html',
  styleUrl: './power-bi-app.component.css'
})
export class PowerBiAppComponent {
  dashUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dashUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://app.powerbi.com/view?r=eyJrIjoiNmVkZWY5YzMtMzU0NS00YjkwLTlhMDYtNGU4ODQ4N2M0YzgzIiwidCI6IjA3OTQ2ZjZmLTg1NzEtNGUyMi1iY2I0LTcxOTgwMWNkYjM4NiIsImMiOjF9&pageName=ReportSectionc5284f14431409342a45&originpath=%2Fpower-bi-dashboard-examples%2F&_gl=1*423d34*_gcl_au*NjEwNzQ0ODQzLjE3MjE2MDcxOTk.*_ga*MTM2MDYzMDIzNC4xNzIxNjA3MTk5*_ga_YL6VVQXZ1Y*MTcyMTYwNzE5OS4xLjAuMTcyMTYwNzE5OS42MC4wLjA.');
  }
}
