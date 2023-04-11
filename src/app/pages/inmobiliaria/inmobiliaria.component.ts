import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.css']
})

export class InmobiliariaComponent {

  constructor(public admin: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  goToCreate() {
    this.router.navigate(['pages/inmobiliaria/create'])
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
        this.admin.inmobiliarias.splice(pos, 1);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
