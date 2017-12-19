import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserDetailsComponent } from './helper-details.component';
import { UserDetailsRoutingModule } from './helper-details.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserDetailsRoutingModule    
  ],
  declarations: [UserDetailsComponent]
})
export class HelperDetailsModule { }