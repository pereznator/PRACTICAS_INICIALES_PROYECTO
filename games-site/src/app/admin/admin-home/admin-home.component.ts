import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  usuario: any;

  constructor(public usuariosService: UsuariosService) {
    this.usuario = usuariosService.getUsuario();
  }

  ngOnInit(): void {
  }

}
