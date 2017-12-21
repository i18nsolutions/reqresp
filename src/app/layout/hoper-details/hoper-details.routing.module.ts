import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HoperDetailsComponent } from './hoper-details.component';

const routes: Routes = [
  { 
    path: '', component: HoperDetailsComponent,
   
   },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoperDetailsRoutingModule { }
