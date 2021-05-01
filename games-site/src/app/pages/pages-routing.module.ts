import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoComponent } from './juego/juego.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BuscarJuegosComponent } from './buscar-juegos/buscar-juegos.component';
import { NuevaPublicacionComponent } from './nueva-publicacion/nueva-publicacion.component';



const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'biblioteca', component: BibliotecaComponent},
    {path: 'publicaciones', component: PublicacionesComponent},
    {path: 'nueva-publicacion', component: NuevaPublicacionComponent},
    {path: 'juegos', component: JuegosComponent},
    {path: 'juegos/buscar/:nombre', component: BuscarJuegosComponent},
    {path: 'juegos/:id', component: JuegoComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: '', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
