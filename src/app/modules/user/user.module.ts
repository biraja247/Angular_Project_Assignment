import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    ShowUsersComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[
    ShowUsersComponent,
    CreateUserComponent,
    UpdateUserComponent
    // UserRoutingModule
  ]
})
export class UserModule { }
