import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { MainLayoutComponent } from '../main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [
    // main-layout
    MainLayoutComponent,
    // components
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MainLayoutRoutingModule],
  providers: [],
})
export class MainLayoutModule {}
