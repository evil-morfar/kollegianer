import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input() title = "Kollegianer"
  @Input() hideSettings = false

  opened = false;

  constructor() { }

  ngOnInit() {
  }

}
