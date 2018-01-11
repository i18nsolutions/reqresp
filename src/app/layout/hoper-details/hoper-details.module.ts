import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,Validators } from '@angular/forms';

import { HoperDetailsComponent } from './hoper-details.component';
import { HoperDetailsRoutingModule } from './hoper-details.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HoperDetailsRoutingModule    
  ],
  declarations: [HoperDetailsComponent]
})
export class HoperDetailsModule { }