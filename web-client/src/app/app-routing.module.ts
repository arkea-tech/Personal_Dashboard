import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsComponent } from './settings/subscriptions/subscriptions.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { WeatherFormComponent } from './widgets/forms/weather-form/weather-form.component';
import { AuthGuard } from './services/auth-guard.service';

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
        path: 'main', component: MainComponent, /*, canActivate: [AuthGuard],*/
        children: [
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'settings', component: SettingsComponent,
                children: [
                    { path: 'subscriptions', component: SubscriptionsComponent },
                    { path: 'profile', component: ProfileComponent },
                    { path: '', pathMatch: 'full', redirectTo: 'subscriptions'
                    },
                    { path: '**', redirectTo: 'subscriptions' }
                ]
            },
            { path: 'about', component: AboutComponent },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: '**', redirectTo: 'dashboard' }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' }, //replace by home
    { path: '**', redirectTo: 'home' } //replace by home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
