import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {PageViewByBrowserWidgetComponent} from "./page-view-by-browser-widget/page-view-by-browser-widget.component";
import {PageViewPieChartWidgetComponent} from "./page-view-pie-chart-widget/page-view-pie-chart-widget.component";
import {ImpressionsByCountryWidgetComponent} from "./impressions-by-country-widget/impressions-by-country-widget.component";
import {DashboardHeaderComponent} from "./dashboard-header/dashboard-header.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: DashboardHeaderComponent
  },
  {
    path: 'section1',
    component: PageViewByBrowserWidgetComponent,
    outlet: 'section1'
  },
  {
    path: 'section2',
    component: PageViewPieChartWidgetComponent,
    outlet: 'section2'
  },
  {
    path: 'section3',
    component: ImpressionsByCountryWidgetComponent,
    outlet: 'section3'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
