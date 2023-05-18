import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Gian Arce';
  edad = 20;
  email = 'gian.arce@tecsup.edu.pe';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio='http://www.google.com';
  profesion='';
  anios='';

  esActivo() {
    if(this.activo)
      return 'Trabajador Activo';
    else  
      return 'Trabajador Inactivo';
  }

  ultimo3Sueldos() {
    let suma = 0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }

  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
