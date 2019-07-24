import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  //El primer "peliculas" equivale al [peliculas] del home.component.html,
  //el segundo peliculas, equivale al let peliculas of peliculas del peliculas.component.html
  @Input('peliculas') peliculas; 

  constructor() { }

  ngOnInit() {
  }

}