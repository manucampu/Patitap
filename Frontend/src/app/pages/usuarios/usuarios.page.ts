import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private _data: DataService) { 
    this._data.listaUsuarios().subscribe((res)=>{
      this._data.usuarios = [];
      this._data.usuarios = res['usuario'];
    },(error)=>{
      console.error(error);
    });
    
  }

  ngOnInit() {
  }


  onClick( id: string){

    this._data.borrar(id).subscribe((data)=>{

      this._data.listaUsuarios().subscribe((res)=>{
        this._data.usuarios = [];
        this._data.usuarios = res['usuario'];

      },(error)=>{
        console.error(error);
      });

    },(error)=>{
      console.error(error);
    }
    );
  }

}
