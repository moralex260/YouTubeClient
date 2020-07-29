import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  @Input()
  public id: number;
  public arr: [string, string, string] = ['item1', 'item2', 'item3'];
  constructor(private router: Router) { }

 public ngOnInit(): void {
  }

   public goToItem(): void {
this.router.navigate(['request', this.id]);
  }
}
