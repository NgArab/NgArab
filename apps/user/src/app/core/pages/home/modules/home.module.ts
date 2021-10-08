import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    // components
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
