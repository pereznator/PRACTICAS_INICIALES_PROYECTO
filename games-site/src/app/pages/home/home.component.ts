import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: any;
  cargando = true;

  constructor(public usuariosService: UsuariosService) {
    this.usuario = this.usuariosService.getUsuario();
    this.cargando = false;
  }

  ngOnInit(): void {
  }

}
