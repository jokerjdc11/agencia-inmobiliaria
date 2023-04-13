import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  usuario = this.admin.root.find(dato => dato.
    toString()
  );

  constructor(public admin: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email == this.usuario?.email && this.password == this.usuario.password) {
      Swal.fire(
        'Bienvenido!',
        'Puedes ingresar al sistema!',
        'success'
      ).then()
      this.usuario.state = true;
      this.router.navigate(['pages'])
    } else {
      Swal.fire(
        'Error!',
        'Verifique usuario y contraseña!',
        'error'
      )
    }
  }

  logOut(){
    let user = this.admin.root.find(dato => dato.
      toString()
    );
    if (user) {
      user.state = false;
  }
  }
}
