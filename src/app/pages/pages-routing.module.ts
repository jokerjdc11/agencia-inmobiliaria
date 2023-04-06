import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { OfficeComponent } from './office/office.component';
import { OwnerComponent } from './owner/owner.component';
import { PagesComponent } from './pages.component';
import { VisitComponent } from './visit/visit.component';
import { CreateComponent } from './client/create/create.component';
import { CreateInmobiliariaComponent } from './inmobiliaria/create/create.component';
import { CreateOfficeComponent } from './office/create-office/create-office.component';
import { CreateOwnerComponent } from './owner/create-owner/create-owner.component';
import { CreateVisitComponent } from './visit/create-visit/create-visit.component';

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
        path: 'client/create',
        component: CreateComponent
      },
      {
        path: 'inmobiliaria/create',
        component: CreateInmobiliariaComponent
      },
      {
        path: 'offices/create',
        component: CreateOfficeComponent
      },
      {
        path: 'owners/create',
        component: CreateOwnerComponent
      },
      {
        path: 'visits/create',
        component: CreateVisitComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
