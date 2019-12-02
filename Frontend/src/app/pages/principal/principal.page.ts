import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {


  constructor(private _data: DataService) { 

    this._data.listaUltimos().subscribe((res)=>{
      this._data.perdidos = [];
      this._data.perdidos = res['perdido'];

    },(error)=>{
      console.error(error);
    });

  }

  ngOnInit() {
  }


  onClick( id: string){

    this._data.borrarPerdido(id).subscribe((data)=>{


    },(error)=>{
      console.error(error);
    }
    );
  }
}
