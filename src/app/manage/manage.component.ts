import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Providers } from '../providers';
declare var $:any;

@Component({
  templateUrl: './manage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../assets/css/manage.bundle.css']
})
export class ManageComponent implements OnInit {
  constructor(private _router: Router) {
  }

  ngOnInit() {
    Providers.Bundle.loadManageScripts().then(() => {
      Providers.Helper.SetLoading(false);
    });
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        //$.blockUI({message:''});
        //Providers.Helper.SetLoading(true);
      }
      if (route instanceof NavigationEnd) {
       // Providers.Helper.SetLoading(false);
      }
    });
  }
}