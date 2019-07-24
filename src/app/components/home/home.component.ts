import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estrenos:any;
  populares:any;
  kids:any;
  buscador:any;


  constructor(private _peliculasSrv:PeliculasService) {
    //cargar metodo getPopulares para crear el ngfor en el html
    this._peliculasSrv.getPopulares()
          .subscribe(populares => {
            //limitamos el numero de resultados recogidos desde la api
            populares.results.length = 6;
            //extraemos el vector del objeto para poder itinerar en el ngFor
            this.populares = populares.results
          });

    this._peliculasSrv.getCartelera()
          .subscribe(estrenos => {
            //limitamos el numero de resultados recogidos desde la api
            estrenos.results.length = 6;
            //extraemos el vector del objeto para poder itinerar en el ngFor
            this.estrenos = estrenos.results
          });

    this._peliculasSrv.getKids()
          .subscribe(kids => {
            //limitamos el numero de resultados recogidos desde la api
            kids.results.length = 6;
            //extraemos el vector del objeto para poder itinerar en el ngFor
            this.kids = kids.results
          });    
   }

  ngOnInit() {
  }

  ngDoCheck(){
    this.buscador = this._peliculasSrv.buscador;
  }

}