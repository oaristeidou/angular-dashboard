import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {

  constructor() {

  }

  setGraphs(g1, g2, g3) {
    console.log(g1, g2, g3);

  }

}
