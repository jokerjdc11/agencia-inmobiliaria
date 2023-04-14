import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit {

  office = {
    'id': 0,
    'phone_number': 0
  };

  constructor(public admin: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.admin.registerCurrent) {
      this.office = this.admin.registerCurrent;
    }
  }

  addRegister() {
    if (this.admin.registerCurrent) {
      let objeto = this.admin.registerCurrent;

      let id = objeto.id
      let phone_number = objeto.phone_number

      let posicionActual = this.admin.offices[id - 1];

      posicionActual.id = id;
      posicionActual.phone_number = phone_number;

      Swal.fire('Exito!', 'Hemos modificado con éxito el registro de la oficina actual', 'success');
      this.router.navigate(['pages/offices']);
    } else {
      Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

      this.admin.offices.unshift(this.office);
      this.router.navigate(['pages/offices']);
    }
  }
}
