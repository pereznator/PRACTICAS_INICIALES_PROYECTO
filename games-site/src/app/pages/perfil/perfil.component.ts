import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioForm: FormGroup;
  cargando = true;
  usuario: any;
  errorForm = false;

  constructor(private usuariosService: UsuariosService, private fb: FormBuilder, private datePipe: DatePipe) {
    this.usuario = this.usuariosService.getUsuario();
    this.construirFormulario();
  }

  ngOnInit(): void {}

  construirFormulario(): void {
    this.usuarioForm = this.fb.group({
      nombre: [this.usuario.nombre, [Validators.required]],
      apellido: [this.usuario.apellido, [Validators.required]],
      username: [this.usuario.username, [Validators.required]],
      correo: [this.usuario.correo, [Validators.required]],
      biografia: [this.usuario.biografia, [Validators.required]],
      fecha: [this.datePipe.transform(this.usuario.fecha_nacimiento, 'yyyy/MM/dd'), [Validators.required]],
    });
    this.cargando = false;
  }

  actualizarUsuario(): void {
    if (this.usuarioForm.invalid) {
      this.errorForm = true;
      return this.usuarioForm.markAllAsTouched();
    }
    const registroCuerpo = {
      nombre: this.usuarioForm.get('nombre').value,
      apellido: this.usuarioForm.get('apellido').value,
      username: this.usuarioForm.get('username').value,
      correo: this.usuarioForm.get('correo').value,
      biografia: this.usuarioForm.get('biografia').value,
      fecha_nacimiento: this.usuarioForm.get('fecha').value,
    };
    this.usuariosService.actualizarUsuario(this.usuario.id, registroCuerpo).subscribe(resp => {
      console.log(resp);
      if (resp.mensaje !== 'Exito') {
        return this.errorForm = true;
      }
      window.location.reload();
    }, err => {
      console.log(err);
      this.errorForm = true;
    });
  }

  cerrarSesion(): void {
    this.usuariosService.cerrarSesion();
    window.location.reload();
  }

}
