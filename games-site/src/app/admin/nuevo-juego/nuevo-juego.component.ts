import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-nuevo-juego',
  templateUrl: './nuevo-juego.component.html',
  styleUrls: ['./nuevo-juego.component.css']
})
export class NuevoJuegoComponent {

  juegoForm: FormGroup;
  creandoFormulario = true;
  consolas = [];
  juegoCreado = false;

  constructor(private fb: FormBuilder,
              private adminService: AdminService) {
    this.getConsolas();
    this.crearFormulario();
  }

  getConsolas(): void {
    this.adminService.getConsolas().subscribe( resp => {
      this.consolas = resp.consolas;
    }, err => {
      console.log(err);
    });
  }

  crearFormulario(): void {
    this.juegoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      rutaImagen: ['', [Validators.required]],
      fechaLanzamiento: ['', [Validators.required]],
      consola: ['', [Validators.required]],
    });
    this.creandoFormulario = false;
  }

  crearJuego(): void {
    if (this.juegoForm.invalid) {
      console.log('invalido');
      this.juegoForm.markAllAsTouched();
      return;
    }
    const juegoCuerpo = {
      nombre: this.juegoForm.get('nombre').value,
      descripcion: this.juegoForm.get('descripcion').value,
      imagen: this.juegoForm.get('rutaImagen').value,
      fecha: this.juegoForm.get('fechaLanzamiento').value,
      id_consola: this.juegoForm.get('consola').value,
    };
    this.adminService.nuevoJuego(juegoCuerpo).subscribe( resp => {
      if (resp.mensaje !== 'Exito') {
        this.juegoCreado = false;
        return;
      }
      this.juegoCreado = true;
    }, err => {
      console.log(err);
      this.juegoCreado = false;
    });
  }

}
