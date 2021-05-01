import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoComponent } from './juego/juego.component';
import { BuscarJuegosComponent } from './buscar-juegos/buscar-juegos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaPublicacionComponent } from './nueva-publicacion/nueva-publicacion.component';



@NgModule({
  declarations: [
    HomeComponent,
    BibliotecaComponent,
    PublicacionesComponent,
    PerfilComponent,
    JuegosComponent,
    JuegoComponent,
    BuscarJuegosComponent,
    NuevaPublicacionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class PagesModule { }
