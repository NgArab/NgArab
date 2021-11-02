import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home.component';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    // components
    HomeComponent,
    PopupComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
