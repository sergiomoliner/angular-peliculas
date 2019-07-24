import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {
  private apikey:string = "94f4087a7e5053a44180000dd02ad733";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[]=[];
  buscador:any[]=[];

  constructor(private jsonp:Jsonp) { }

  getPopulares(){
    let url = this.urlMoviedb + "/discover/movie?sort_by=popularity.desc&api_key=" + this.apikey + "&language=es&callback=JSONP_CALLBACK";

    return this.jsonp.get(url)
              .map(res=>res.json());
  }

  getCartelera(){
    let url = this.urlMoviedb + "/discover/movie?primary_release_date.gte=2019-06-15&primary_release_date.lte=2019-06-30&api_key=" + this.apikey + "&language=es&callback=JSONP_CALLBACK";

    return this.jsonp.get(url)
              .map(res=>res.json());
  }

  getKids(){
    let url = this.urlMoviedb + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=" + this.apikey + "&language=es&callback=JSONP_CALLBACK";

    return this.jsonp.get(url)
              .map(res=>res.json());
  }

  buscarPelicula(texto:string){
    let url = this.urlMoviedb + "/search/movie?query="+ texto + "&sort_by=popularity.desc&api_key=" + this.apikey + "&language=es&callback=JSONP_CALLBACK";

    return this.jsonp.get(url)
              .map(res=>{
                this.peliculas = res.json();
                console.log("buscar", this.peliculas);
                return res.json()
                });
  }
}