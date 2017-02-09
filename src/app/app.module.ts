import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CategoryDetailRoutingModule} from "./app-routing.module";
import {CategoryDetailComponent} from "./component/category-detail/category-detail.component";
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { CategoryListComponent } from './component/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
      CategoryDetailComponent,
      NavBarComponent,
      CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      CategoryDetailRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
