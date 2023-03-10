import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DomainComponent} from './domain.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DomainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'company',
        loadChildren: () => import('./company/company.module')
          .then(m => m.CompanyModule),
      },
      {
        path: 'perfil-usuario',
        loadChildren: () => import('./perfil-usuario/perfil-usuario.module')
          .then(m => m.PerfilUsuarioModule),
      },
      {
        path: 'seguridad',
        loadChildren: () => import('./seguridad/seguridad.module')
          .then(m => m.SeguridadModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainRoutingModule {
}
