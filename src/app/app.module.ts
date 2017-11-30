import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageViewByBrowserWidgetComponent } from './page-view-by-browser-widget/page-view-by-browser-widget.component';
import { PageViewPieChartWidgetComponent } from './page-view-pie-chart-widget/page-view-pie-chart-widget.component';
import { ImpressionsByCountryWidgetComponent } from './impressions-by-country-widget/impressions-by-country-widget.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageViewByBrowserWidgetComponent,
    PageViewPieChartWidgetComponent,
    ImpressionsByCountryWidgetComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
