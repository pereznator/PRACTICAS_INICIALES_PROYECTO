import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario: any;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private serverService: ServerService,
              private router: Router) {
    if (localStorage.getItem('idUsuario')) {
      this.buscarUsuario(localStorage.getItem('idUsuario')).subscribe( resp => {
        console.log(resp);
        this.usuario = resp.usuario;
        this.loggedIn.next(true);
      }, err => {
        console.log(err);
        localStorage.setItem('idUsuario', '');
      });
    }else {
      this.usuario = null;
      this.loggedIn.next(false);
      this.router.navigateByUrl('/auth/login');
    }

  }

  getUsuario(): any {
    return this.usuario;
  }

  registrar(usuarioCuerpo: any): Observable<any> {
    return this.serverService.request('POST', 'usuarios/register', usuarioCuerpo);
  }

  login(loginCuerpo: any): Observable<any> {
    return this.serverService.request('POST', 'usuarios/login', loginCuerpo);
  }

  buscarUsuario(usuarioId: string): Observable<any> {
    return this.serverService.request('GET', `usuarios/${usuarioId}`);
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

  cerrarSesion(): void {
    this.usuario = null;
    localStorage.setItem('idUsuario', '');
  }

}
