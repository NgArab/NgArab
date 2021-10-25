import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// component
import { AboutComponent } from '@core/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
