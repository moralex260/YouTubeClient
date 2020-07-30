import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public form: FormGroup;
  public inputData: FormControl = new FormControl('');
  constructor(private router: Router) {
    this.form = new FormGroup({inputData: this.inputData});
    console.log(this.form.value);
  }

public ngOnInit(): void {
  }

 public goToMenu(): void {
    this.router.navigate(['menu']);
  }

 public save(): void {
    const data: string = this.inputData.value;
    this.router.navigate(['search'], {state: {data}}) ;
  }
}
