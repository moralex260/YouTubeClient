import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {SearchItem} from '../../models/search-item';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  public searchItem: SearchItem[];

  constructor(private searchService: SearchService) {
this.searchService.getList().subscribe(value => this.searchItem = value);
  }

 public ngOnInit(): void {
  }

}
