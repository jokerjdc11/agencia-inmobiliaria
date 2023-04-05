import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent {

  constructor(public admin: AdminService) { }

  ngOnInit(): void {
  }

  goToCreate() {
  }

  deleteClient(pos: any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar el cliente?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result: { isConfirmed: any; isDenied: any; }) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          'Exito!',
          'El cliente ha sido eliminado!',
          'success'
        );
        this.admin.clients.splice(pos, 1);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
