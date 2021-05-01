import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  usuarios = [];
  juegos = [];

  masJuegos = true;
  masComentarios = false;
  mejoresJuegos = false;
  porAnio = false;

  cargando = true;

  constructor(private adminService: AdminService) {
    this.conMasJuegos();
  }

  ngOnInit(): void {}

  conMasJuegos(): void {
    this.cargando = true;

    this.masJuegos = true;
    this.masComentarios = false;
    this.mejoresJuegos = false;
    this.porAnio = false;

    this.adminService.getMasJuegos().subscribe( resp => {
      console.log(resp);
      this.usuarios = resp.usuarios;
      this.cargando = false;
    }, err => {
      console.log(err);
    });
  }

  conMasComentarios(): void {
    this.cargando = true;

    this.masJuegos = false;
    this.masComentarios = true;
    this.mejoresJuegos = false;
    this.porAnio = false;

    this.adminService.getMasComentarios().subscribe( resp => {
      console.log(resp);
      this.usuarios = resp.usuarios;
      this.cargando = false;
    }, err => {
      console.log(err);
    });
  }

  conMejoresJuegos(): void {
    this.cargando = true;

    this.masJuegos = false;
    this.masComentarios = false;
    this.mejoresJuegos = true;
    this.porAnio = false;

    this.adminService.getMejoresJuegos().subscribe( resp => {
      console.log(resp);
      this.juegos = resp.juegos;
      this.cargando = false;
    }, err => {
      console.log(err);
    });
  }

  conPorAnio(): void {
    this.cargando = true;

    this.masJuegos = false;
    this.masComentarios = false;
    this.mejoresJuegos = false;
    this.porAnio = true;

    this.adminService.getJuegosPorFecha().subscribe( resp => {
      console.log(resp);
      this.juegos = resp.juegos;
      this.cargando = false;
    }, err => {
      console.log(err);
    });
  }

}
