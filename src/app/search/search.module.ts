import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';

const routes: Routes = [{path: '' , component: SearchComponent},
  {path: 'goHomePage' , redirectTo: '/'}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule { }
