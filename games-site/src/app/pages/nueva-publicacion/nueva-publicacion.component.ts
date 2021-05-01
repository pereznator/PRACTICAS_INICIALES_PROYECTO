import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.css']
})
export class NuevaPublicacionComponent implements OnInit {

  comentario = '';
  nombreJuego = '';
  usuario: any;
  cargando = true;
  juegos = [];
  cargandoJuegos = true;
  seleccionado = false;
  juegoId = '';
  publicacionCreada = false;

  constructor(private juegosService: JuegosService, private usuariosService: UsuariosService,
              private router: Router) {
    this.usuario = this.usuariosService.getUsuario();
  }

  ngOnInit(): void {}

  get publiNoValida(): boolean {
    return this.comentario.length === 0 || this.juegoId.length === 0;
  }

  getJuegos(): void {
    this.cargandoJuegos = true;
    this.seleccionado = false;
    this.juegoId = '';
    if (this.nombreJuego.length === 0){
      return;
    }
    this.juegosService.buscarJuegos(this.nombreJuego).subscribe( resp => {
      console.log(resp);
      this.juegos = resp.juegos;
      this.cargandoJuegos = false;
    }, err => {
      console.log(err);
    });
  }

  seleccionar(juegoId: string, nombreJuego: string): void {
    this.juegoId = juegoId;
    this.nombreJuego = nombreJuego;
    this.seleccionado = true;
  }

  publicar(): void {
    const publiCuerpo = {
      id_usuario: this.usuario.id,
      id_juego: this.juegoId,
      comentario: this.comentario
    };
    this.juegosService.crearPublicacion(publiCuerpo).subscribe( resp => {
      if (resp.mensaje === 'Exito'){
        this.publicacionCreada = true;
        this.router.navigateByUrl('/publicaciones');
      }
    }, err => {
      console.log(err);
    });
  }

}
