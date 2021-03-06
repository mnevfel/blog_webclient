import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Providers } from './providers';

declare var $:any;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {
  }

  ngOnInit() {
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