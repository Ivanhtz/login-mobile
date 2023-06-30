import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAreaRoutingModule } from './login-area-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/users-list/user-card/user-card.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserCardComponent,
    DialogComponent

  ],
  imports: [
    CommonModule,
    LoginAreaRoutingModule,
    MaterialModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class LoginAreaModule { }
