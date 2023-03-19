import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { OwnerComponent } from './owner/owner.component';
import { OfficeComponent } from './office/office.component';
import { ClientComponent } from './client/client.component';
import { VisitComponent } from './visit/visit.component';


@NgModule({
  declarations: [
    PagesComponent,
    InmobiliariaComponent,
    OwnerComponent,
    OfficeComponent,
    ClientComponent,
    VisitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
