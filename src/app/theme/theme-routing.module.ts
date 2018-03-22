import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../auth/auth.guard";

import { ThemeComponent } from "./theme.component";

const routes: Routes = [
  {
    "path": "",
    "component": ThemeComponent,
    //"canActivate": [AuthGuard],
    "children": [
      { 
        "path": "",
        "loadChildren": "app/theme/home/home.module#HomeModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }