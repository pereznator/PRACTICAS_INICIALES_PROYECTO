import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: any;
  cargando = true;
  publicaciones = [];

  constructor(public usuariosService: UsuariosService, private juegosService: JuegosService) {
    this.usuario = this.usuariosService.getUsuario();
    this.getPublicaciones();
  }

  ngOnInit(): void {}

  getPublicaciones(): void {
    this.juegosService.getTodasPublicaciones().subscribe( resp => {
      const publi = resp.publicaciones;
      for (const pub of publi) {
        // tslint:disable-next-line:no-string-literal
        pub['porComentar'] = '';
      }

      for (let x = publi.length - 1; x > -1 ; x--) {
        this.publicaciones.push(publi[x]);
      }
      this.cargando = false;
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


