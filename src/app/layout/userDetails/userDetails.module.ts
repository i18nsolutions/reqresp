import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserDetailsComponent } from './userDetails.component';
import { UserDetailsRoutingModule } from 'app/layout/userDetails/userDetails-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserDetailsRoutingModule    
  ],
  declarations: [UserDetailsComponent]
})
export class UserDetailsModule { }