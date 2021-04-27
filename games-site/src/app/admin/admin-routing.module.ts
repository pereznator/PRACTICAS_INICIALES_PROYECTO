import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NuevaConsolaComponent } from './nueva-consola/nueva-consola.component';
import { ConsolasComponent } from './consolas/consolas.component';


const routes: Routes = [
    {path: 'nueva-consola', component: NuevaConsolaComponent},
    {path: 'consolas', component: ConsolasComponent},
    {path: 'nuevo-juego', component: NuevoJuegoComponent},
    {path: 'juegos', component: JuegosComponent},
    {path: 'nuevo-usuario', component: NuevoUsuarioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: '**', redirectTo: 'juegos'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
