import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-juegos',
  templateUrl: './buscar-juegos.component.html',
  styleUrls: ['./buscar-juegos.component.css']
})
export class BuscarJuegosComponent implements OnInit {

  cargando = true;
  juegos = [];
  error = false;
  nombre = '';

  constructor(private juegosService: JuegosService, private activatedRoute: ActivatedRoute) {
    this.obtenerResultados();
  }

  ngOnInit(): void {}

  obtenerResultados(): void {
    this.activatedRoute.params.subscribe( params => {
      this.nombre = params.nombre;
      this.juegosService.buscarJuegos(params.nombre).subscribe( resp => {
        console.log(resp);
        this.juegos = resp.juegos;
        this.cargando = false;
      }, err => {
        console.log(err);
        this.error = true;
      });
    });
  }

}
