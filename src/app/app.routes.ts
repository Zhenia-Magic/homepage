import { Routes } from '@angular/router';
import { DashAppComponent } from "../dash-app/dash-app.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { PowerBiAppComponent } from "../power-bi-app/power-bi-app.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dash-app', component: DashAppComponent },
  { path: 'power-bi-app', component: PowerBiAppComponent }
];
