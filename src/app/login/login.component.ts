import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  token:string ="admintoken";
  email: string = '';
  password: string = '';

  emailReg: string = 'admin@gmail.com';
  passReg: string = '1234';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email === this.emailReg && this.password === this.passReg) {
      Swal.fire(
        'Bienvenido!',
        'Puedes ingresar al sistema!',
        'success'
      ).then()
      this.router.navigate(['pages'])
    } else {
      Swal.fire(
        'Error!',
        'Verifique usuario y contraseña!',
        'error'
      )
    }
  }

}
