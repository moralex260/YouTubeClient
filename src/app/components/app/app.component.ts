import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
let key: string;
key = 'AIzaSyBWUwUkl-DN7UKgN2Xyxd2peJh-et0aVt0';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor() {
  // this.httpClient.get<Resp>(` https://youtubeanalytics.googleapis.com/v2/reports?key=${key}`)
  //   .subscribe(value => console.log(value));
}
}
