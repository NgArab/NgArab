import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestInfoComponent } from '../test-info.component';
import { TestInfoRoutingModule } from './test-info-routing.module';

@NgModule({
  declarations: [TestInfoComponent],
  imports: [CommonModule, TestInfoRoutingModule],
})
export class TestInfoModule {}
