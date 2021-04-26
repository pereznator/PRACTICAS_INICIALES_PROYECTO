import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario = null;

  constructor(private serverService: ServerService) { }

  registrar(usuarioCuerpo: any): Observable<any> {
    return this.serverService.request('POST', 'usuarios/register', usuarioCuerpo);
  }

  login(loginCuerpo: any): Observable<any> {
    return this.serverService.request('POST', 'usuarios/login', loginCuerpo);
  }

  guardarUsuario(usuario: any): void {
    this.usuario = usuario;
    localStorage.setItem('idUsuario', this.usuario.id);
  }

  estaAutorizado(): boolean {
    if (localStorage.getItem('idUsuario')) {
      return localStorage.getItem('idUsuario').length > 0;
    }
    return false;
  }

  esAdmin(): boolean {
    if (this.estaAutorizado) {
      return this.usuario.tipo === 'admin';
    }
    return false;
  }

}
