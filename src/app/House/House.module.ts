import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './House.component';
import { HouseRoutingModule } from '../House/House.routing'
import { FormsModule }   from '@angular/forms';
import { GooglemapModule } from 'app/googlemap/googlemap.module';
import { HopersListComponent } from './hopersList/hopersList.component';
@NgModule({
  imports: [
    CommonModule,
    HouseRoutingModule,
    FormsModule,
    GooglemapModule

    ],
  declarations: [
    // HouseComponent,
    HopersListComponent
]
})
export class HouseModule { }