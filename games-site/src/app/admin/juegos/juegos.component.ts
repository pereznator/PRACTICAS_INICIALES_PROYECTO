import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegos = [];
  cargando = true;

  constructor(private adminService: AdminService) {
    this.getJuegos();
  }

  ngOnInit(): void {
  }

  getJuegos(): void {
    this.adminService.getJuegos().subscribe( resp => {
      console.log(resp);
      this.juegos = resp.juegos;
      this.cargando = false;
    }, err => {
      console.log(err);
      this.cargando = false;
    });
  }

}
