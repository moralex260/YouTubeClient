import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  @Input()
 arr = ['item1', 'item2', 'item3'];
  id: number;
  constructor() { }

  ngOnInit(): void {
  }

}
