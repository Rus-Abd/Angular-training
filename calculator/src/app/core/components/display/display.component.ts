import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  input: string = '';
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.name.subscribe((data) => {
      this.input = data;
    });
  }
}
