import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styles: [
    `
    ::ng-deep button>span
      display: flex
      flex-direction: column
      width: 100%
      align-items: center

      >span
        line-height: initial


    .unselected
      color: #888
  `,
  ],
})
export class BottomMenuComponent implements OnInit {
  currentSelected = 'home';
  /*
  home,
  shopping,
  accounting,
  chat
  */

  constructor(private router: Router) {}

  ngOnInit(): void {
    const newPage = this.router.url.split('/')[1];
    this.currentSelected = newPage === '' ? 'home' : newPage;
  }

  onClick(button: string) {
    this.currentSelected = button;
    this.router.navigate([button === 'home' ? '' : button]).catch();
  }
}
