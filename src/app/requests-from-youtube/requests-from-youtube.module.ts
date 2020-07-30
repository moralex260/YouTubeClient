import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './components/request/request.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { SearchComponent } from '../search/components/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [{path: '', component: RequestComponent},
  {path: 'goHomePage' , redirectTo: '/'}];
@NgModule({
  declarations: [RequestComponent, SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class RequestsFromYoutubeModule { }
