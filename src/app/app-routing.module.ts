import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { C404Component } from './components/c404/c404.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'back', loadChildren: () => import('./modules/login-area/login-area.module').then(m => m.LoginAreaModule) },
  { path: 'not-found', component: C404Component },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
