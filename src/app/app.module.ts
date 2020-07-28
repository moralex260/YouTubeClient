import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
const routes: Routes = [{path: '' , component: HeaderComponent , children:
 [{path: 'menu' , component: HeaderMenuComponent}]}];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
