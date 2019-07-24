import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buscar:string = "";
  buscador:any;

  constructor(public peliculasSrv:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }

    this.peliculasSrv.buscarPelicula(this.buscar)
            .subscribe(buscador =>{
              this.buscador = buscador.results
              console.log(this.buscador)
              this.peliculasSrv.buscador = this.buscador;
            }); 
  }
}