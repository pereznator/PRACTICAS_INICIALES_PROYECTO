import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private serverService: ServerService) { }

  buscarJuegos(busqueda: string): Observable<any> {
    return this.serverService.request('GET', `juegos/search/${busqueda}`);
  }

  /**
   * Obtener un usuario por id
   * @param idJuego es la id del juego que se quiere obtener
   * @returns observable
   */
    getJuego(idJuego: string): Observable<any> {
      return this.serverService.request('GET', `juegos/${idJuego}`);
    }

    getJuegos(): Observable<any> {
      return this.serverService.request('GET', 'juegos');
    }

    getBiblioteca(usuarioId: string): Observable<any> {
      return this.serverService.request('GET', `bibliotecas/usuario/${usuarioId}`);
    }

    agregarBiblioteca(cuerpoBiblioteca: any): Observable<any> {
      return this.serverService.request('POST', 'bibliotecas', cuerpoBiblioteca);
    }

    verificarBiblioteca(datos: any): Observable<any> {
      return this.serverService.request('POST', 'bibliotecas/usuario', datos);
    }

    updateBiblioteca(idBiblioteca: string, cuerpoBiblioteca: any): Observable<any> {
      return this.serverService.request('PATCH', `bibliotecas/${idBiblioteca}`, cuerpoBiblioteca);
    }

    crearPublicacion(cuerpoPublicacion: any): Observable<any> {
      return this.serverService.request('POST', 'publicaciones', cuerpoPublicacion);
    }

    getPublicacionUsuario(usuarioId: string): Observable<any> {
      return this.serverService.request('GET', `publicaciones/${usuarioId}`);
    }

    getTodasPublicaciones(): Observable<any> {
      return this.serverService.request('GET', 'publicaciones');
    }

    comentar(comentarioCuerpo: any): Observable<any> {
      return this.serverService.request('POST', 'comentarios', comentarioCuerpo);
    }

    getComentarios(publicacionId: string): Observable<any> {
      return this.serverService.request('GET', `comentarios/${publicacionId}`);
    }

}
