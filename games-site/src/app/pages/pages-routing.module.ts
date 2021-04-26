import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoComponent } from './juego/juego.component';
import { PerfilComponent } from './perfil/perfil.component';



const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'biblioteca', component: BibliotecaComponent},
    {path: 'publicaciones', component: PublicacionesComponent},
    {path: 'juegos', component: JuegosComponent},
    {path: 'juegos/:id', component: JuegoComponent},
    {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
