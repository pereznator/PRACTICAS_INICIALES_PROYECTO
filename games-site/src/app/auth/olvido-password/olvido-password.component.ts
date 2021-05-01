import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvido-password',
  templateUrl: './olvido-password.component.html',
  styleUrls: ['./olvido-password.component.css']
})
export class OlvidoPasswordComponent implements OnInit {

  olivioForm: FormGroup;
  formularioCargado = false;
  invalido = false;

  constructor(private usuariosService: UsuariosService, private fb: FormBuilder, private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  get usernameNoValido(): boolean {
    return this.olivioForm.get('username').invalid && this.olivioForm.get('username').touched;
  }
  get correoNoValido(): boolean {
    return this.olivioForm.get('correo').invalid && this.olivioForm.get('correo').touched;
  }

  crearFormulario(): void {
    this.olivioForm = this.fb.group({
      username: ['', [Validators.required]],
      correo: ['', [Validators.required]]
    });
    this.formularioCargado = true;
  }

  login(): void {
    if (this.olivioForm.invalid) {
      return this.olivioForm.markAllAsTouched();
    }

    const cuerpo = {
      username: this.olivioForm.get('username').value,
      correo: this.olivioForm.get('correo').value
    };

    this.usuariosService.olvidoPassword(cuerpo).subscribe(resp => {
      console.log(resp);
      if (resp.valido === true) {
        return this.router.navigate(['/', 'auth', 'reset-password', resp.usuario.id]);
      }
      this.invalido = true;
    }, err => {
      console.log(err);
    });

  }

}
