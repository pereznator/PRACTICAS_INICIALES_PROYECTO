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

  /**
   * Obtener un usuario por id
   * @param idJuego es la id del juego que se quiere obtener
   * @returns observable
   */
  getJuego(idJuego: string): Observable<any> {
    return this.serverService.request('GET', `juegos/${idJuego}`);
  }

  /**
   * Actualizar la informacion de un juego
   * @param idJuego la id del juego
   * @param juegoBody el cuerpo del juego que se va a actualizar
   * @returns observable
   */
  actualizarJuego(idJuego: string, juegoBody: any): Observable<any> {
    return this.serverService.request('PATCH', `juegos/${idJuego}`, juegoBody);
  }

  getMasJuegos(): Observable<any> {
    return this.serverService.request('GET', 'usuarios/mas-juegos');
  }

  getMasComentarios(): Observable<any> {
    return this.serverService.request('GET', 'usuarios/mas-comentarios');
  }

  getMejoresJuegos(): Observable<any> {
    return this.serverService.request('GET', 'juegos/mejores-juegos');
  }

  getJuegosPorFecha(): Observable<any> {
    return this.serverService.request('GET', 'juegos/juegos-fecha');
  }

}
