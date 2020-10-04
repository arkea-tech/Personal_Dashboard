import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'signup', component: SignupComponent },
            { path: 'login', component: LoginComponent },
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: '**', redirectTo: 'login' }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
