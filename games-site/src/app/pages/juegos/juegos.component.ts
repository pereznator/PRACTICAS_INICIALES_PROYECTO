import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegos = [];
  cargando = true;
  error = false;

  constructor(private juegosService: JuegosService) {
    this.getJuegos();
  }

  ngOnInit(): void {}

  getJuegos(): void {
    this.juegosService.getJuegos().subscribe( resp => {
      this.juegos = resp.juegos;
      this.cargando = false;
    }, err => {
      console.log(err);
      this.error = true;
      this.cargando = false;
    });
  }

}
