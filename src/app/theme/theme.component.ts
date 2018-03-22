import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Providers } from '../providers';
declare var $:any;

@Component({
  templateUrl: './theme.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../assets/css/theme.bundle.css']
})
export class ThemeComponent implements OnInit {
  constructor(private _router: Router) {
  }

  ngOnInit() {
    Providers.Bundle.loadThemeScripts().then(() => {
      Providers.Helper.SetLoading(false);
    });
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        //Providers.Helper.SetLoading(true);
      }
      if (route instanceof NavigationEnd) {
       // Providers.Helper.SetLoading(false);
      }
    });
  }
}