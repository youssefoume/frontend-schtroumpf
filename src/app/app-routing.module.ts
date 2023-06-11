import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfilComponent } from './profil/profil.component';
import { AmisComponent } from './amis/amis.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';

const routes: Routes = [
  {path:'sign-up', component: SignUpComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'home', component: ProfilComponent},
  {path:'profil', component: ProfilUserComponent},
  {path:'amis', component: AmisComponent},
  {path:'**', redirectTo: 'sign-in', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
