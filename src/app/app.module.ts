import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ManageLayoutModule } from './manage/layout/layout.module';
import { ThemeComponent } from './theme/theme.component';
import { ManageComponent } from './manage/manage.component';
//import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { ManageRoutingModule } from "./manage/manage-routing.module";
//import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [
    ManageComponent,
    ThemeComponent,
    AppComponent,
  ],
  imports: [
    ManageLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule,
    ManageRoutingModule,
    //AuthModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }