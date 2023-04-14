import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {

  owner = {
    'id': 0,
    'name': '',
    'last_name': '',
    'address': '',
    'phone_number': 0,
    'identification': 0
  };

  constructor(public admin: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.admin.registerCurrent) {
      this.owner = this.admin.registerCurrent;
    }
  }

  addRegister() {
    if (this.admin.registerCurrent) {
      let objeto = this.admin.registerCurrent;

      let id = objeto.id
      let name = objeto.name
      let last_name = objeto.last_name
      let address = objeto.address
      let identification = objeto.identification
      let phone_number = objeto.phone_number

      let posicionActual = this.admin.owners[id - 1];

      posicionActual.id = id;
      posicionActual.name = name;
      posicionActual.last_name = last_name;
      posicionActual.address = address;
      posicionActual.identification = identification;
      posicionActual.phone_number = phone_number;

      Swal.fire('Exito!', 'Hemos modificado con éxito el registro', 'success');
      this.router.navigate(['pages/owners']);
    } else {
      Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

      this.admin.owners.unshift(this.owner);
      this.router.navigate(['pages/owners']);
    }
  }
}
