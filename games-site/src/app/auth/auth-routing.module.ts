import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OlvidoPasswordComponent } from './olvido-password/olvido-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'olvido-password', component: OlvidoPasswordComponent},
    {path: 'reset-password/:id', component: ResetPasswordComponent},
    {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
