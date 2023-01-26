import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DomainRoutingModule} from './domain-routing.module';
import {DomainComponent} from './domain.component';
import {ThemeModule} from '../@theme/theme.module';
import {NbMenuModule} from '@nebular/theme';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DomainComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DomainRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
})
export class DomainModule {
}
