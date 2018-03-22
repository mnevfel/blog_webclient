import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    'path': '',
    'component': HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ], exports: [
    RouterModule,
  ], declarations: [
    HomeComponent,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}