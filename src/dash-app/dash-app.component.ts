import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import {
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";

@Component({
  selector: 'app-dash-app',
  standalone: true,
  imports: [SplitterModule],
  templateUrl: './dash-app.component.html',
  styleUrl: './dash-app.component.css'
})
export class DashAppComponent {
  dashUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dashUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://dash.gallery/dash-nlp/');
  }
}
