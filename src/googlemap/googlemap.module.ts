import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapComponent } from './googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GooglemapRoutingModule } from 'googlemap/googlemap-routing.module';

@NgModule({
  imports: [
    CommonModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCqJSleo9Hr0agaJtCanJZREr7ai9uCu_k',
        libraries: ['places']
      }),
      FormsModule,
      ReactiveFormsModule, GooglemapRoutingModule
    ],
  declarations: [GooglemapComponent]
})
export class GooglemapModule { }

