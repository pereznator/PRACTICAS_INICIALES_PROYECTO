import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoComponent } from './juego/juego.component';



@NgModule({
  declarations: [HomeComponent, BibliotecaComponent, PublicacionesComponent, PerfilComponent, JuegosComponent, JuegoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
