import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import{ Libro } from'./libro.model';
import { LIBROS2 } from './mocks';

@Injectable()
export class LibroService {
  constructor(private loggerService: LoggerService) { }
  /*getLibros() {
    this.loggerService.log("Llamada realizada sobre LibroService.getLibros");
    return LIBROS;
  }*/

  getLibros(): Promise<Libro[]> {
    return new Promise<Libro[]>( (resolve, reject) => {
      this.loggerService.log("Inicio ejecutor (Promise de LibroService.getLibros())");
      setTimeout(() => {
        this.loggerService.log("Fin ejecutor (Promise de LibroService.getLibros())");
        resolve(LIBROS2);
      }, 5000);
    });
  }
}