import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ManageLayoutModule {
}