import { Routes, RouterModule } from '@angular/router';
import {HouseComponent } from '../House/House.component'
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path : '', component: HouseComponent
   },
];

export const HouseRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }