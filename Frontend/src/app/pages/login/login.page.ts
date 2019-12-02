import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string="";
  password:string="";
  usuarios:any={}; 
  
  constructor(private _data: DataService, private _route: Router) { }

  ngOnInit() {
  }



ingresar() {
    this._data.ingresar(this.email, this.password).subscribe((data)=>{

          this.usuarios = data['usuarioIngreso'];

          if (this.usuarios.length > 0) {
            this._data.listaUsuarios().subscribe((data) => {
              this._data.usuarios = [];
              this._data.usuarios = data['usuario'];
              this._route.navigate(['/principal']);

              bienvenidoPatitapp();
              async function bienvenidoPatitapp() {
                const toast = document.createElement('ion-toast');
                toast.message = 'Inicio de Sesion correcto, Bienvenid@ a Patitapp';
                toast.duration = 7000;
                toast.color= "success";
                toast.buttons = [
                  {
                    side: 'start',
                    icon: 'paw'
                  },
                   {
                    text: 'Gracias',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel Ok');
                    }
                  }
                ];
                document.body.appendChild(toast);
                return toast.present();
              };
            }, (error) =>{
              console.error(error);
            });
          } else{
            validarLogin();
            async function validarLogin() {
              const toast = document.createElement('ion-toast');
              toast.message = 'El Usuario o contraseña son incorrectos, intenta de nuevo';
              toast.duration = 10000;
              toast.color= "danger";
              toast.buttons = [
                {
                  side: 'start',
                  icon: 'paw'
                },
                 {
                  text: 'OK',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel Ok');
                  }
                }
              ];
              document.body.appendChild(toast);
              return toast.present();
            }
          }
    });
  }


}
