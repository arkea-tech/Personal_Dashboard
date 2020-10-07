import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { WidgetService } from './services/widget.service';
import { ManagedServicesService } from './services/managed-services.service';
import { UserServicesService } from './services/user-services.service';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrigamiFormsModule } from '@codebakery/origami/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FloatingButtonComponent } from './dashboard/floating-button/floating-button.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsComponent } from './settings/subscriptions/subscriptions.component';
import { ProfileComponent } from './settings/profile/profile.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    FloatingButtonComponent,
    SettingsComponent,
    SubscriptionsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OrigamiFormsModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      AuthService,
      ProfileService,
      WidgetService,
      ManagedServicesService,
      UserServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
