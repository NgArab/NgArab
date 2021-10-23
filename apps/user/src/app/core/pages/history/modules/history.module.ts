import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryComponent } from '../history.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [
    // components
    HistoryComponent,
  ],
  imports: [CommonModule, HistoryRoutingModule],
  providers: [],
})
export class HistoryModule {}
