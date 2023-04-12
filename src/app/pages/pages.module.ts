import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { OwnerComponent } from './owner/owner.component';
import { OfficeComponent } from './office/office.component';
import { ClientComponent } from './client/client.component';
import { VisitComponent } from './visit/visit.component';
import { CreateComponent } from './client/create/create.component';
import { CreateInmobiliariaComponent } from './inmobiliaria/create/create.component';
import { CreateOfficeComponent } from './office/create-office/create-office.component';
import { CreateOwnerComponent } from './owner/create-owner/create-owner.component';
import { CreateVisitComponent } from './visit/create-visit/create-visit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    InmobiliariaComponent,
    OwnerComponent,
    OfficeComponent,
    ClientComponent,
    VisitComponent,
    CreateComponent,
    CreateInmobiliariaComponent,
    CreateOfficeComponent,
    CreateOwnerComponent,
    CreateVisitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
