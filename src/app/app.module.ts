import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeliculasService } from './services/peliculas.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, ImagenPipe, PeliculasComponent],
  bootstrap:    [ AppComponent ],
  providers: [PeliculasService]
})
export class AppModule { }
