import { Component, OnInit, Input } from '@angular/core';
import contrast from 'contrast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  textColor: string;

  constructor() {
  }

  ngOnInit() {
    if (contrast(this.color) === 'light') {
      this.textColor = 'black';
    } else {
      this.textColor = 'white';
    }
  }

}