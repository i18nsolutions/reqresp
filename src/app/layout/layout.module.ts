import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { GooglemapModule } from 'app/googlemap/googlemap.module';
import { HouseModule } from 'app/House/House.module';
import { DashboardModule } from 'app/layout/dashboard/dashboard.module';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        GooglemapModule,
        HouseModule,
        DashboardModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
    ]
})
export class LayoutModule { }
