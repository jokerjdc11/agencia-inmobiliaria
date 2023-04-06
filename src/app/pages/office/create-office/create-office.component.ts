import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit{

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

  addRegister(){
    Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

    this.admin.offices.unshift(this.office);
    this.router.navigate(['pages/offices']);
  }
}
