import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent {

  constructor(public admin: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  goToCreate() {
    this.router.navigate(['pages/offices/create'])
  }

  deleteRegister(pos: any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result: { isConfirmed: any; isDenied: any; }) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          'Exito!',
          'El registro ha sido eliminado!',
          'success'
        );
        this.admin.offices.splice(pos, 1);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };

  editRegister(inmobiliaria: any) {
    this.admin.registerCurrent = inmobiliaria;
    this.router.navigate(['pages/offices/create']);
  };
}
