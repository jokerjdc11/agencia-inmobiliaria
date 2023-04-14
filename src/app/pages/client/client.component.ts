import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent {

  constructor(public admin: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  goToCreate() {
    this.router.navigate(['pages/client/create'])
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
  };

  editRegister(client: any) {
    this.admin.registerCurrent = client;
    this.router.navigate(['pages/client/create']);
  };
}
