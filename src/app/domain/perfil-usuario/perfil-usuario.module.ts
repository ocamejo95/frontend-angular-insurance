import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,

  ],
})
export class PerfilUsuarioModule { }
