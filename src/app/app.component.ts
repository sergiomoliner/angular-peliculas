import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(public _ps:PeliculasService){
    this._ps.getPopulares().subscribe(data=>console.log("Populares", data));
    this._ps.getKids().subscribe(data=>console.log("Kids", data));
    this._ps.getCartelera().subscribe(data=>console.log("Cartelera", data));
  }
}
