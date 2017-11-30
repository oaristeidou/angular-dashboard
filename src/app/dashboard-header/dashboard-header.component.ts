import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {

  constructor(private router: Router) {

  }

  setGraphs(g1, g2, g3) {
    console.log(g1, g2, g3);

    let sections = "";

    if (g1){
      sections = "section1:section1";
    }

    if (g2){
      if (sections){
        sections += "//";
      }
      sections += "section2:section2";
    }

    if (g3) {
      if (sections){
        sections += "//";
      }
      sections += "section3:section3";
    }

    let url = "/home";

    if (sections) {
      url += `(${sections})`;
    }

    console.log(url);

    this.router.navigateByUrl(url);

  }

}
