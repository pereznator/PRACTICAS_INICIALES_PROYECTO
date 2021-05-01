import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones = [];
  cargando = true;
  usuario: any;
  comentarios = [];

  constructor(private juegosService: JuegosService, private usuariosService: UsuariosService,
              private router: Router) {
    this.usuario = this.usuariosService.getUsuario();
    this.getPublicaciones();
  }

  ngOnInit(): void {}

  getPublicaciones(): void {
    this.juegosService.getPublicacionUsuario(this.usuario.id).subscribe( resp => {
      this.publicaciones = resp.publicaciones;
      this.publicaciones.forEach( pub => {
        // tslint:disable-next-line:no-string-literal
        pub['porComentar'] = '';
        // tslint:disable-next-line:no-string-literal
        pub['comentarios'] = [];
        this.juegosService.getComentarios(pub.id_publicacion).subscribe( com => {
          if (com.mensaje === 'Exito') {
            // tslint:disable-next-line:no-string-literal
            pub['comentarios'] = com.comentarios;
          }
        }, err => {
          console.log(err);
        });
      });
    }, err => {
      console.log(err);
    });
  }

  comentar(publicacionId: string, comentarioPublicacion: string): void {
    const comentarioCuerpo = {
      id_publicacion: publicacionId,
      id_usuario: this.usuario.id,
      comentario: comentarioPublicacion
    };
    this.juegosService.comentar(comentarioCuerpo).subscribe( resp => {
      console.log(resp);
      if (resp.mensaje === 'Exito') {
        window.location.reload();
      }
    }, err => {
      console.log(err);
    });
  }

}
