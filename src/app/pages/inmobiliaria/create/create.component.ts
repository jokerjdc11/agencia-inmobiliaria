import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateInmobiliariaComponent implements OnInit{

  inmobiliaria = {
    "id": 0,
    "ganancia": "",
    "inmueble": "",
    "superficie": 0,
    "address": "",
    "habitaciones": 0,
    "banos": 0,
    "cocinas": 0,
    "gas": "",
    "parqueadero": "",
    "precio": 0,
    "referencia": 0
  };

  constructor(public admin: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.admin.registerCurrent) {
      this.inmobiliaria = this.admin.registerCurrent;
    }
  }

  addRegister(){
    Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

    this.admin.inmobiliarias.unshift(this.inmobiliaria);
    this.router.navigate(['pages/inmobiliaria']);
  }
}
