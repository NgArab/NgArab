import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestInfoComponent } from '../test-info.component';
const routes: Routes = [
  {
    path: '',
    component: TestInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestInfoRoutingModule {}
