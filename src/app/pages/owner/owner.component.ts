import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {

  constructor(public admin: AdminService) { }

  ngOnInit(): void {
  }

  goToCreate() {
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
        this.admin.owners.splice(pos, 1);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
