import {Component} from '@angular/core';
import {MENU_ITEMS} from './domain-menu';

@Component({
  selector: 'ngx-domain',
  styleUrls: ['./domain.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class DomainComponent {

  menu = MENU_ITEMS;


}
