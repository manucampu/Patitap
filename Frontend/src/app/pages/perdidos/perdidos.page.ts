import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-perdidos',
  templateUrl: './perdidos.page.html',
  styleUrls: ['./perdidos.page.scss'],
})
export class PerdidosPage implements OnInit {

  constructor(private _data: DataService) { 

    this._data.listaPerdidos().subscribe((res)=>{
      this._data.perdidos = [];
      this._data.perdidos = res['perdido'];
    },(error)=>{
      console.error(error);
    });

  }


//nombre:string, tipo:string, raza:string, lugar:string,sexo:string, id:string
    //cambiar estado
actualizarEstado(item:any){
  this._data.actualizarEstado(item.nombre, item.tipo, item.raza, item.lugar, item.sexo, item._id).subscribe((res) => {
    this._data.listaPerdidos().subscribe((res)=>{
      this._data.perdidos = [];
      this._data.perdidos = res['perdido'];

      cambiarEstado();
      async function cambiarEstado() {
        const toast = document.createElement('ion-toast');
        toast.message = 'La mascota se ha marcado como "encontrada" y ha sido eliminada de la lista';
        toast.duration = 8000;
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
    },(error)=>{
      console.error(error);
    });
    
  });
}

borrarPerdido( id: string){

  this._data.borrarPerdido(id).subscribe((data)=>{
    
    eliminarPerdido();
      async function eliminarPerdido() {
        const toast = document.createElement('ion-toast');
        toast.message = 'La mascota ha sido eliminada de la lista';
        toast.duration = 8000;
        toast.color= "danger";
        toast.buttons = [
          {
            side: 'start',
            icon: 'alert'
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

    this._data.listaPerdidos().subscribe((res)=>{
      this._data.perdidos = [];
      this._data.perdidos = res['perdido'];

    },(error)=>{
      console.error(error);
    });

  },(error)=>{
    console.error(error);
  }
  );
}

  ngOnInit() {
  }

}
