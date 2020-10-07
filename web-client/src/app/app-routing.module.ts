import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsComponent } from './settings/subscriptions/subscriptions.component';
import { ProfileComponent } from './settings/profile/profile.component';

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
    {
        path: 'settings', component: SettingsComponent,
        children: [
            { path: 'subscriptions', component: SubscriptionsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: '', pathMatch: 'full', redirectTo: 'subscriptions' },
            { path: '**', redirectTo: 'subscriptions' }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'settings' }, //replace by home
    { path: '**', redirectTo: 'settings' } //replace by home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
