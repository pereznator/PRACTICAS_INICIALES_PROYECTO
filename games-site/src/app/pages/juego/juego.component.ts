import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego: any;
  cargando = true;
  error = false;
  punteo = '';
  opinion = '';
  usuario: any;
  creado = false;

  existente = false;
  biblioteca: any;

  constructor(private juegosService: JuegosService, private activatedRoute: ActivatedRoute,
              private usuariosService: UsuariosService) {
    this.usuario = usuariosService.getUsuario();
    this.getJuego();
  }

  ngOnInit(): void {}

  get validPunteo(): boolean {
    return this.punteo.length === 0 || this.opinion.length === 0 || this.creado;
  }

  getJuego(): void {
    this.activatedRoute.params.subscribe( params => {
      this.juegosService.getJuego(params.id).subscribe( resp => {
        this.juego = resp.juego;
        this.getBiblioteca();
        this.cargando = false;
      }, err => {
        this.error = true;
        this.cargando = false;
      });
    });
  }

  getBiblioteca(): void {
    const datos = {
      id_usuario: this.usuario.id,
      id_juego: this.juego.id_juego
    };
    this.juegosService.verificarBiblioteca(datos).subscribe( resp => {
      console.log(resp);
      if (resp.agregado === true) {
        this.existente = true;
        this.biblioteca = resp.biblioteca;
        this.opinion = resp.biblioteca.opinion;
        this.punteo = resp.biblioteca.puntuacion;
      }
    }, err => {
      console.log(err);
      this.error = true;
    });
  }

  agregarBiblioteca(): void {
    const cuerpoBiblioteca = {
      id_usuario: this.usuario.id,
      id_juego: this.juego.id_juego,
      puntuacion: this.punteo,
      opinion: this.opinion
    };
    this.juegosService.agregarBiblioteca(cuerpoBiblioteca).subscribe( resp => {
      console.log(resp);
      this.creado = true;
    }, err => {
      console.log(err);
    });
  }

  actualizarBiblioteca(): void {
    const cuerpoBiblioteca = {
      id_usuario: this.usuario.id,
      id_juego: this.juego.id_juego,
      puntuacion: this.punteo,
      opinion: this.opinion
    };
    this.juegosService.updateBiblioteca(this.biblioteca.id_biblioteca, cuerpoBiblioteca).subscribe( resp => {
      console.log(resp);
      this.creado = true;
    }, err => {
      console.log(err);
    });
  }

}
