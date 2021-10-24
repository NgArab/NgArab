import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question.component';
import { QuestionRoutingModule } from './question-routing.module';

@NgModule({
  declarations: [QuestionComponent],
  imports: [CommonModule, QuestionRoutingModule],
})
export class QuestionModule {}
