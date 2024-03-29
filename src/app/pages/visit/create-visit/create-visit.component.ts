import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit{

  visit = {
    'id': 0,
    'date': '',
    'comment': ''
  };

  constructor(public admin: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.admin.registerCurrent) {
      this.visit = this.admin.registerCurrent;
    }
  }

  addRegister(){
    Swal.fire('Exito!', 'El registro ha sido ingresado', 'success');

    this.admin.visits.unshift(this.visit);
    this.router.navigate(['pages/visits']);
  }
}
