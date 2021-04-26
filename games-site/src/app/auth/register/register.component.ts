import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loadForm = false;
  errorForm = false;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService,
              private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  get nombreNoValido(): boolean {
    return this.registerForm.get('nombre').invalid && this.registerForm.get('nombre').touched;
  }
  get apellidoNoValido(): boolean {
    return this.registerForm.get('apellido').invalid && this.registerForm.get('apellido').touched;
  }
  get usernameNoValido(): boolean {
    return this.registerForm.get('username').invalid && this.registerForm.get('username').touched;
  }
  get correoNoValido(): boolean {
    return this.registerForm.get('correo').invalid && this.registerForm.get('correo').touched;
  }
  get biografiaNoValida(): boolean {
    return this.registerForm.get('biografia').invalid && this.registerForm.get('biografia').touched;
  }
  get fechaNoValida(): boolean {
    return this.registerForm.get('fechaNacimiento').invalid && this.registerForm.get('fechaNacimiento').touched;
  }
  get passwordNoValido(): boolean {
    return this.registerForm.get('password').invalid && this.registerForm.get('password').touched;
  }

  crearFormulario(): void {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(45)]],
      apellido: ['', [Validators.required, Validators.maxLength(45)]],
      username: ['', [Validators.required, Validators.maxLength(45)]],
      correo: ['', [Validators.required, Validators.maxLength(45)]],
      biografia: ['', [Validators.required, Validators.maxLength(45)]],
      fechaNacimiento: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(45)]],
    });
    this.loadForm = true;
  }

  registrar(): void {
    if (this.registerForm.invalid) {
      return this.registerForm.markAllAsTouched();
    }
    const registroCuerpo = {
      tipo: 'normal',
      nombre: this.registerForm.get('nombre').value,
      apellido: this.registerForm.get('apellido').value,
      username: this.registerForm.get('username').value,
      correo: this.registerForm.get('correo').value,
      biografia: this.registerForm.get('biografia').value,
      fecha_nacimiento: this.registerForm.get('fechaNacimiento').value,
      password: this.registerForm.get('password').value
    };
    console.log(registroCuerpo);
    this.usuariosService.registrar(registroCuerpo).subscribe(resp => {
      console.log(resp);
      if (resp.mensaje !== 'Exito') {
        return this.errorForm = true;
      }
      this.router.navigateByUrl('/auth/login');
    }, err => {
      console.log(err);
      this.errorForm = true;
    });
  }

}
