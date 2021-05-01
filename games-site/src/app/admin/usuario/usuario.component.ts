import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: any;
  formListo = false;
  errorForm = false;
  error = false;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe) {
                this.getUsuario();
              }

  ngOnInit(): void {}

  getUsuario(): void {
    this.activatedRoute.params.subscribe( params => {
      this.usuariosService.buscarUsuario(params.id).subscribe( resp => {
        this.usuario = resp.usuario;
        this.crearFormulario();
      }, err => {
        console.log(err);
        this.error = true;
      });
    });
  }

  crearFormulario(): void {
    this.usuarioForm = this.fb.group({
      nombre: [this.usuario.nombre, [Validators.required, Validators.maxLength(45)]],
      apellido: [this.usuario.apellido, [Validators.required, Validators.maxLength(45)]],
      username: [this.usuario.username, [Validators.required, Validators.maxLength(45)]],
      correo: [this.usuario.correo, [Validators.required, Validators.maxLength(45)]],
      biografia: [this.usuario.biografia, [Validators.required, Validators.maxLength(45)]],
      fechaNacimiento: [this.datePipe.transform(this.usuario.fecha_nacimiento, 'yyyy/MM/dd'), [Validators.required]]
    });
    this.formListo = true;
  }

  actualizarUsuario(): void {
    if (this.usuarioForm.invalid) {
      return this.usuarioForm.markAllAsTouched();
    }
    const registroCuerpo = {
      tipo: 'normal',
      nombre: this.usuarioForm.get('nombre').value,
      apellido: this.usuarioForm.get('apellido').value,
      username: this.usuarioForm.get('username').value,
      correo: this.usuarioForm.get('correo').value,
      biografia: this.usuarioForm.get('biografia').value,
      fecha_nacimiento: this.usuarioForm.get('fechaNacimiento').value,
    };
    this.usuariosService.actualizarUsuario(this.usuario.id, registroCuerpo).subscribe(resp => {
      console.log(resp);
      if (resp.mensaje !== 'Exito') {
        return this.errorForm = true;
      }
    }, err => {
      console.log(err);
      this.errorForm = true;
    });
  }

}
