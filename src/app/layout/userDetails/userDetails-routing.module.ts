import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from 'app/layout/userDetails/userDetails.component';

const routes: Routes = [
  { 
    path: '', component: UserDetailsComponent,
   
   },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
