import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfilComponent } from './profil/profil.component';
import { AmisComponent } from './amis/amis.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { AuthGuard } from './services/auth.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:'sign-up', component: SignUpComponent,canActivate: [UserGuard]},
  {path:'sign-in', component: SignInComponent,canActivate: [UserGuard]},
  {path:'home', component: ProfilComponent,canActivate: [AuthGuard] },
  {path:'profil', component: ProfilUserComponent,canActivate: [AuthGuard] },
  {path:'amis', component: AmisComponent,canActivate: [AuthGuard] },
  {path:'**', redirectTo: 'sign-in', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
