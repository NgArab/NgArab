import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from '@core/about/about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    // components
    AboutComponent,
  ],
  imports: [CommonModule, AboutRoutingModule],
  providers: [],
})
export class AboutModule {}
