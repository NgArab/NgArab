import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [QuestionComponent],
  imports: [CommonModule, QuestionRoutingModule,FormsModule,],
})
export class QuestionModule {}
