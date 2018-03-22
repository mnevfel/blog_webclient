import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Providers } from '../../../providers/index';

declare let mLayout: any;
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
}