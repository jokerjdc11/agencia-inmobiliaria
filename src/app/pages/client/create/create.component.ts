import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit{

  client = {
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
      this.client = this.admin.registerCurrent;
    }
  }

  addRegister(){
    Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

    this.admin.clients.unshift(this.client);
    this.router.navigate(['pages/clients']);
  }
}
