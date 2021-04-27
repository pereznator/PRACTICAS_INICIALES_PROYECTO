import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule), canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)/*, canActivate: [AuthGuard]*/},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
