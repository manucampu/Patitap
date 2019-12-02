import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-encontrados',
  templateUrl: './encontrados.page.html',
  styleUrls: ['./encontrados.page.scss'],
})
export class EncontradosPage implements OnInit {

  constructor(private _data2: DataService) { 

    this._data2.listaEncontrados().subscribe((res)=>{
      this._data2.perdidos = [];
      this._data2.perdidos = res['perdido'];
      console.log(_data2);
    },(error)=>{
      console.error(error);
    });

  }

  actualizarEstado(item:any){
    this._data2.actualizarEstado2(item.nombre, item.tipo, item.raza, item.lugar, item.sexo, item._id).subscribe((res) => {
      this._data2.listaEncontrados().subscribe((res)=>{
        this._data2.perdidos = [];
        this._data2.perdidos = res['perdido'];
  
        validarLogin();
        async function validarLogin() {
          const toast = document.createElement('ion-toast');
          toast.message = 'La mascota ha sido marcada como "perdida" y se ha eliminado de la lista';
          toast.duration = 8000;
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
        };
      },(error)=>{
        console.error(error);
      });
      
    });
  }


  ngOnInit() {
  }

}
