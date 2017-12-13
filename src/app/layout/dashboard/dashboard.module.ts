import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { GooglemapComponent } from '../../googlemap/googlemap.component';
import { HouseComponent } from 'app/House/House.component';
import { HouseModule } from 'app/House/House.module';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        HouseComponent
    ]
})
export class DashboardModule { }
