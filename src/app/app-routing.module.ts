import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthComponent } from "./auth/auth.component";
//import { LogoutComponent } from "./auth/logout/logout.component";
//import { LoginGuard } from 'app/auth/auth.guard';

const routes: Routes = [
  //{ path: 'giris-yap', component: AuthComponent, canActivate: [LoginGuard] },
  //{ path: 'cikis-yap', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }