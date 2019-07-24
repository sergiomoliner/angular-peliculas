import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  constructor(private domSanitizer:DomSanitizer){}

  transform(value: string): any {
    let url = "https://image.tmdb.org/t/p/w500"
    let result = url + value;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(result);
  }

}