import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  biblioteca = [];
  cargando = true;
  error = false;
  usuario: any;

  constructor(private juegosService: JuegosService, private usuariosService: UsuariosService) {
    this.usuario = usuariosService.getUsuario();
    this.getBiblioteca();
  }

  ngOnInit(): void {}

  getBiblioteca(): void {
    this.juegosService.getBiblioteca(this.usuario.id).subscribe( resp => {
      console.log(resp);
      this.biblioteca = resp.bibliotecas;
      this.cargando = false;
    }, err => {
      console.log(err);
      this.error = true;
      this.cargando = false;
    });
  }

}
