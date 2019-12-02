import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-perdido',
  templateUrl: './add-perdido.page.html',
  styleUrls: ['./add-perdido.page.scss'],
})

export class AddPerdidoPage implements OnInit {
  
  nombre:string=""; 
  tipo:string=""; 
  raza:string=""; 
  lugar:string="";
  sexo:string="";  

  constructor(public _data : DataService, public route: Router) { }

  ngOnInit() {
  }

  enviarFormulario() {
    console.log('Form submit');
    this._data.crearPerdido(this.nombre, this.tipo, this.raza, this.lugar, this.sexo).subscribe( (res) => {
      this.route.navigate(['/perdidos']);
      perdidoAgregado();
      async function perdidoAgregado() {
        const toast = document.createElement('ion-toast');
        toast.message = 'La mascota ha sido agragada a la lista!';
        toast.duration = 7000;
        toast.color= "success";
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
      };  
    })
    
    }
}


