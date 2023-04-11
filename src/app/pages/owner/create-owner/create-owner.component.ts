import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit{

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

  addRegister(){
    Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

    this.admin.owners.unshift(this.owner);
    this.router.navigate(['pages/owners']);
  }
}
