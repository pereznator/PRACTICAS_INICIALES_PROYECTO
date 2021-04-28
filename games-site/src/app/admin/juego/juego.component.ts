import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegoForm: FormGroup;
  creandoFormulario = true;
  consolas = [];
  juegoCreado = false;
  juego: any;

  constructor(private fb: FormBuilder,
              private adminService: AdminService,
              private activatedRoute: ActivatedRoute) {
                this.getJuego();
              }

  ngOnInit(): void {}

  getJuego(): void {
    this.activatedRoute.params.subscribe( resp => {
      this.adminService.getJuego(resp.id).subscribe( rjuego => {
        this.juego = rjuego.juego;
        console.log(this.juego);
        this.getConsolas();
        this.crearFormulario();
      }, err => {
        console.log(err);
      });
    });
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
      nombre: [this.juego.nombre, [Validators.required]],
      descripcion: [this.juego.descripcion, [Validators.required]],
      rutaImagen: [this.juego.imagen, [Validators.required]],
      fechaLanzamiento: [this.juego.fecha, [Validators.required]],
      consola: [this.juego.id_consola, [Validators.required]],
    });
    this.creandoFormulario = false;
  }

  actualizarJuego(): void {
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
    this.adminService.actualizarJuego(this.juego.id_juego , juegoCuerpo).subscribe( resp => {
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
