import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = [];
  cargando = true;
  error = false;

  constructor(private usuariosService: UsuariosService) {
    this.getUsuarios();
  }

  ngOnInit(): void {}

  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe( resp => {
      if (resp.mensaje !== 'Exito'){
        this.error = true;
        return;
      }
      this.usuarios = resp.usuarios;
      this.cargando = false;
    }, err => {
      console.log(err);
      this.cargando = false;
      this.error = true;
    });
  }

}
