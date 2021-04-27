import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private serverService: ServerService) {}

  /**
   * Funcion para crear una nueva consola
   * @returns observable
   */
  nuevaConsola(consolaCuerpo: any): Observable<any> {
    return this.serverService.request('POST', 'consolas', consolaCuerpo);
  }

  /**
   *  Funcion para obtener todas las consolas
   * @returns observable
   */
  getConsolas(): Observable<any> {
    return this.serverService.request('GET', 'consolas');
  }

  /**
   * Funcion para crear un nuevo juego
   * @returns observable
   */
  nuevoJuego(juegoCuerpo: any): Observable<any> {
    return this.serverService.request('POST', 'juegos', juegoCuerpo);
  }

  /**
   * Funcion para obtener todos los juegos
   * @returns observable
   */
  getJuegos(): Observable<any> {
    return this.serverService.request('GET', 'juegos');
  }

}
