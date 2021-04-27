import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { AdminRoutingModule } from './admin-routing.module';
import { JuegosComponent } from './juegos/juegos.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NuevaConsolaComponent } from './nueva-consola/nueva-consola.component';
import { ConsolasComponent } from './consolas/consolas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NuevoJuegoComponent,
    JuegosComponent,
    NuevoUsuarioComponent,
    UsuariosComponent,
    ReportesComponent,
    NuevaConsolaComponent,
    ConsolasComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
