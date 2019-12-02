import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.page.html',
  styleUrls: ['./login-registro.page.scss'],
})
export class LoginRegistroPage implements OnInit {
    
    nombre:string=""; 
    login:string="";
    email:string="";
    password:string="";
    password2:string="";
 

  constructor(public _data : DataService, public route: Router) { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    var igualdad = this.password.localeCompare(this.password2);

    if(igualdad == 0){
           this._data.crearCuenta(this.nombre, this.login, this.email, this.password).subscribe( (res) => {

            this.route.navigate(['/login']);

            this._data.listaUsuarios().subscribe((data)=>{
              this._data.usuarios = [];
              this._data.usuarios = data['usuario'];

            },(error)=>{
              console.error(error);
            });

      }, (error)=>{
         console.error(error);
      });

    }else{
      console.log('Contrasenia no coinciden');

    }
  }

}
