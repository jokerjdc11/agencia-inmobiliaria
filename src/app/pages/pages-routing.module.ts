import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { LoginComponent } from './login/login/login.component';
import { OfficeComponent } from './office/office.component';
import { OwnerComponent } from './owner/owner.component';
import { PagesComponent } from './pages.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
      path: 'clients',
      component: ClientComponent
      },
      {
      path: 'inmobiliaria',
      component: InmobiliariaComponent
      },
      {
      path: 'offices',
      component: OfficeComponent
      },
      {
      path: 'owners',
      component: OwnerComponent
      },
      {
      path: 'visits',
      component: VisitComponent
      },
      {
        path: "**" ,
        component: LoginComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
