import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HoperDetailsComponent } from './hoper-details.component';
import { HoperDetailsRoutingModule } from './hoper-details.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HoperDetailsRoutingModule    
  ],
  declarations: [HoperDetailsComponent]
})
export class HoperDetailsModule { }