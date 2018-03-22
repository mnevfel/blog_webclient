import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../auth/auth.guard";

import { ManageComponent } from "./manage.component";

const routes: Routes = [
  {
    "path": "yonetim",
    "component": ManageComponent,
    //"canActivate": [AuthGuard],
    "children": [
      {
        "path": "ekran",
        "loadChildren": "app/manage/home/home.module#HomeModule"
      },
      {
        "path": "",
        "redirectTo": "ekran",
        "pathMatch": "full"
      },
      {
        "path": "**",
        "redirectTo": "ekran",
        "pathMatch": "full"
      }
    ]
  },
  {
    "path": "**",
    "redirectTo": "",
    "pathMatch": "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }