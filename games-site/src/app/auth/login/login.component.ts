import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formularioCargado = false;
  errorForm = false;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService,
              private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  get usernameNoValido(): boolean {
    return this.loginForm.get('username').invalid && this.loginForm.get('username').touched;
  }
  get passwordNoValido(): boolean {
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }

  crearFormulario(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.formularioCargado = true;
  }

  login(): void {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }

    const loginCuerpo = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    console.log(loginCuerpo);
    this.usuariosService.login(loginCuerpo).subscribe(resp => {
      console.log(resp);
      if (resp.mensaje !== 'Exito'){
        return this.errorForm = true;
      }
      this.usuariosService.guardarUsuario(resp.usuario);
      this.router.navigateByUrl('/home');
    }, err => {
      console.log(err);
      this.errorForm = true;
    });

  }

}
