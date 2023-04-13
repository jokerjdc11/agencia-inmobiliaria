import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'agencia-inmobiliaria';
  mensaje = "";
  user: boolean = false;
  constructor(public admin: AdminService, private router: Router) { }

  usuario = this.admin.root.find(dato => dato.
    toString()
  );

  ngOnInit(): void {
     if (this.usuario?.state) {
       this.user= true;
       this.mensaje = "Cerrar Sesion";
    }else{
      this.mensaje = "Iniciar sesion";
     }
  }
  
}
