import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-nueva-consola',
  templateUrl: './nueva-consola.component.html',
  styleUrls: ['./nueva-consola.component.css']
})
export class NuevaConsolaComponent {

  nombreConsola = '';
  incompleto = false;
  exito = false;

  constructor(private adminService: AdminService) { }

  crearConsola(): void {
    if (this.nombreConsola.length === 0){
      this.incompleto = true;
      return;
    }
    this.incompleto = false;
    const consola = {
      nombre: this.nombreConsola
    };
    this.adminService.nuevaConsola(consola).subscribe(resp => {
      console.log(resp);
      this.incompleto = false;
      this.exito = true;
    }, err => {
      console.log(err);
    });
  }

}
