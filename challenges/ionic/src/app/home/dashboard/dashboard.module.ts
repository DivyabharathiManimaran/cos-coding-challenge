import { LoadingCardsComponent } from './../../components/loading/loading-cards/loading-cards.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { ErrorComponent } from 'src/app/components/error/error.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    LoadingCardsComponent,
    ErrorComponent
  ]
})
export class DashboardPageModule {}
