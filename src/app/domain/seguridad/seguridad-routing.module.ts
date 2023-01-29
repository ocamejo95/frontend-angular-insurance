import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GestionarUsuarioComponent} from './gestionar-usuario/gestionar-usuario.component';

const routes: Routes = [
  {path: 'manage-users', component: GestionarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {
}
