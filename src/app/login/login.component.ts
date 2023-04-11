import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  emailReg: string = 'admin@gmail.com';
  passReg: string = 'admin1234';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email === this.emailReg && this.password === this.passReg) {
      Swal.fire(
        'Bienvenido!',
        'Puedes ingresar al sistema!',
        'success'
      );
      this.router.navigate(['pages/inmobiliarias'])
    } else {
      Swal.fire(
        'Error!',
        'Verifique usuario y contraseña!',
        'error'
      )
    }
  }
}
