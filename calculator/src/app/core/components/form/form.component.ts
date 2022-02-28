import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  val = '';

  onClick() {}
  calc($event: MouseEvent) {
    let btn = ($event.target as HTMLElement).innerText;
    if (btn === '=') {
      this.val = eval(this.val);
      this.dataservice.changeName(this.val);
    } else if (btn === 'AC') {
      this.val = '';
      this.dataservice.changeName(this.val);
    } else if (btn === 'x') {
      this.val += '*';
      this.dataservice.changeName(this.val);
    } else if (btn === '÷') {
      this.val += '/';
      this.dataservice.changeName(this.val);
    } else if (($event.target as HTMLElement).tagName === 'BUTTON') {
      this.val += btn;
      this.dataservice.changeName(this.val);
    }
    console.log($event.target);
  }
  ngOnInit(): void {}
}
