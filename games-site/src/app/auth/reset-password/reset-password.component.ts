import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password = '';
  idUsuario = '';

  constructor(private activatedRoute: ActivatedRoute, private usuariosService: UsuariosService, private router: Router) {
    this.getUsuario();
  }

  ngOnInit(): void {}

  getUsuario(): void {
    this.activatedRoute.params.subscribe( params => {
      this.idUsuario = params.id;
    });
  }

  actualizarUsuario(): void {
    const cuerpo = {
      password: this.password
    };
    this.usuariosService.actualizarUsuario(this.idUsuario, cuerpo).subscribe( resp => {
      console.log(resp);
      if (resp.mensaje === 'Exito') {
        this.router.navigateByUrl('/auth/login');
      }
    }, err => {
      console.log(err);
    });
  }

}
