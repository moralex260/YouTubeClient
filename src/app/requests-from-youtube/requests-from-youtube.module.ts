import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './components/request/request.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{path: '', component: RequestComponent},
  {path: 'goHomePage' , redirectTo: '/'}];
@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class RequestsFromYoutubeModule { }
