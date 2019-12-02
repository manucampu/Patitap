import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarios:any[]= [];
  perdidos:any[]= [];
  encontrados:any[]= [];

  constructor(private http: HttpClient) { }

  //para registrar cuentas
  crearCuenta(nombre:string, login:string, email:string, password:string){

        let data = {
                'nombre': nombre,
                'login' : login,
                'email' : email,
                'password' : password
        };
        let url = 'http://localhost:3800/api/users';


        return this.http.post(url, data);
  }


  //para listar usuarios
  listaUsuarios(){
    let url = 'http://localhost:3800/api/usuario';

    return this.http.get(url);
  }

  //para ingresar con email y seña
  ingresar(email:string, password:string){
            let data = {
              'email' : email,
              'password' : password
             };
        let url = 'http://localhost:3800/api/usuarioIngreso';


        return this.http.post(url, data);
  }

  //borrar usuario
  borrar(id:string){
    let url = 'http://localhost:3800/api/usuario/' + id;

    return this.http.delete(url);
  }

// PERDIDOS Data
  
  listaPerdidos(){
    let url = 'http://localhost:3800/api/perdidos';

    return this.http.get(url);
  }

  listaUltimos(){
    let url = 'http://localhost:3800/api/ultimos';

    return this.http.get(url);
  }

  listaEncontrados(){
    let url = 'http://localhost:3800/api/encontrados';

    return this.http.get(url);
  }

  borrarPerdido(id:string){
    let url = 'http://localhost:3800/api/perdido/' + id;

    return this.http.delete(url);
  }

  //agregar perdido
  crearPerdido(nombre:string, tipo:string, raza:string, lugar:string, sexo:string){

    let data = {
            'nombre': nombre,
            'tipo': tipo,
            'raza': raza,
            'lugar': lugar,
            'sexo': sexo,
           
    };
    let url = 'http://localhost:3800/api/perdido';


    return this.http.post(url, data);
}

actualizarEstado(nombre:string, tipo:string, raza:string, lugar:string, sexo:string, id:string){
  let data = {
    'nombre': nombre,
    'tipo': tipo,
    'raza': raza,
    'lugar': lugar,
    'sexo': sexo,
    'estado': false
  };

  let url = 'http://localhost:3800/api/perdido/' + id;

  return this.http.put(url, data);
}

actualizarEstado2(nombre:string, tipo:string, raza:string, lugar:string, sexo:string, id:string){
  let data = {
    'nombre': nombre,
    'tipo': tipo,
    'raza': raza,
    'lugar': lugar,
    'sexo': sexo,
    'estado': true
  };

  let url = 'http://localhost:3800/api/perdido/' + id;

  return this.http.put(url, data);
}

}

