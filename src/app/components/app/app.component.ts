import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
const key = 'AIzaSyBWUwUkl-DN7UKgN2Xyxd2peJh-et0aVt0';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  i: any;
constructor(private httpClient: HttpClient) {
  this.httpClient.get<any>(` https://youtubeanalytics.googleapis.com/v2/reports?key=${key}`)
    .subscribe(value => console.log(value));
}
}
