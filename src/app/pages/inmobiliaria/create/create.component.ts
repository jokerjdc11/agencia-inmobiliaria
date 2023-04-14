import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateInmobiliariaComponent implements OnInit {

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
  disabled:boolean = false;
  constructor(public admin: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.admin.registerCurrent) {
      this.disabled = true;
      this.inmobiliaria = this.admin.registerCurrent;
    }
  }

  addRegister() {
    if (this.admin.registerCurrent) {
      let objeto = this.admin.registerCurrent;

      let id = objeto.id
      let ganancia = objeto.ganancia
      let inmueble = objeto.inmueble
      let superficie = objeto.superficie
      let address = objeto.address
      let habitaciones = objeto.habitaciones
      let banos = objeto.banos
      let cocinas = objeto.cocinas
      let gas = objeto.gas
      let parqueadero = objeto.parqueadero
      let precio = objeto.precio
      let referencia = objeto.referencia

      let posicionActual = this.admin.inmobiliarias[id - 1];

      posicionActual.id = id;
      posicionActual.ganancia = ganancia;
      posicionActual.inmueble = inmueble;
      posicionActual.superficie = superficie;
      posicionActual.address = address;
      posicionActual.habitaciones = habitaciones;
      posicionActual.banos = banos;
      posicionActual.cocinas = cocinas;
      posicionActual.gas = gas;
      posicionActual.parqueadero = parqueadero;
      posicionActual.precio = precio;
      posicionActual.referencia = referencia;

      Swal.fire('Exito!', 'Hemos modificado con éxito el registro de la inmobiliaria', 'success');
      this.router.navigate(['pages/inmobiliaria']);
    } else {
      Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

      this.admin.inmobiliarias.unshift(this.inmobiliaria);
      this.router.navigate(['pages/inmobiliaria']);
    }
  }
}
