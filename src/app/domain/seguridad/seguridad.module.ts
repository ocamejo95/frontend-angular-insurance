import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { GestionarUsuarioComponent } from './gestionar-usuario/gestionar-usuario.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [
    GestionarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbInputModule,
  ],
})
export class SeguridadModule { }
