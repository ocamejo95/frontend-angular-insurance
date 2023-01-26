import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DomainRoutingModule} from './domain-routing.module';
import {DomainComponent} from './domain.component';
import {ThemeModule} from '../@theme/theme.module';
import {NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbSelectModule} from '@nebular/theme';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UploadFilesComponent } from './dashboard/upload-files/upload-files.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DomainComponent,
    DashboardComponent,
    UploadFilesComponent,
  ],
  imports: [
    CommonModule,
    DomainRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
  ],
})
export class DomainModule {
}
