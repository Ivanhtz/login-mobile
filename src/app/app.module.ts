import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { C404Component } from './components/c404/c404.component';
import { MaterialModule } from './modules/material/material.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthsService } from './core/services/auths.service';
import { UsersService } from './core/services/users.service';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { loginGuard } from './core/guards/login.guard';
import { LoginAreaModule } from './modules/login-area/login-area.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    C404Component,
    SignUpComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    LoginAreaModule
  ],
  providers: [
    AuthsService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    loginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
