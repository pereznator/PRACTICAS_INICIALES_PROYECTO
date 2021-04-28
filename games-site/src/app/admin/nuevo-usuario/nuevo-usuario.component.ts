import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  creandoFormulario = true;
  errorForm = false;
  usuarioCreado = false;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService,
              private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(45)]],
      apellido: ['', [Validators.required, Validators.maxLength(45)]],
      username: ['', [Validators.required, Validators.maxLength(45)]],
      correo: ['', [Validators.required, Validators.maxLength(45)]],
      biografia: ['', [Validators.required, Validators.maxLength(45)]],
      fechaNacimiento: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(45)]],
    });
    this.creandoFormulario = false;
  }

  crearUsuario(): void {
    console.log('creando..');
    if (this.usuarioForm.invalid) {
      return this.usuarioForm.markAllAsTouched();
    }
    const registroCuerpo = {
      nombre: this.usuarioForm.get('nombre').value,
      tipo: this.usuarioForm.get('tipo').value,
      apellido: this.usuarioForm.get('apellido').value,
      username: this.usuarioForm.get('username').value,
      correo: this.usuarioForm.get('correo').value,
      biografia: this.usuarioForm.get('biografia').value,
      fecha_nacimiento: this.usuarioForm.get('fechaNacimiento').value,
      password: this.usuarioForm.get('password').value,
    };
    console.log(registroCuerpo);
    this.usuariosService.registrar(registroCuerpo).subscribe(resp => {
      console.log(resp);
      if (resp.mensaje !== 'Exito') {
        return this.errorForm = true;
      }
      this.usuarioCreado = true;
    }, err => {
      console.log(err);
      this.errorForm = true;
    });
  }

}
