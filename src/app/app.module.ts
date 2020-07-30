import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import {SearchComponent} from './search/components/search/search.component';
const routes: Routes = [{path: '' , component: HeaderComponent , children:
 [{path: 'menu' , component: HeaderMenuComponent}]},
  {path: 'request/:id', loadChildren: () => import('./requests-from-youtube/requests-from-youtube.module')
      .then(m => m.RequestsFromYoutubeModule)},
  {path: 'search', loadChildren: () => import('./search/search.module')
      .then(m => m.SearchModule)}];
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
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
