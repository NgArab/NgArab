import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// main-layout
import { MainLayoutComponent } from '../main-layout.component';
// child components
import { AboutComponent } from '@core/about/about.component';
import { HistoryComponent } from '@core/history/history.component';
import { HomeComponent } from '@core/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/modules/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../../pages/about/modules/about.module').then(
            (m) => m.AboutModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../../pages/history/modules/history.module').then(
            (m) => m.HistoryModule
          ),
      },
      {
        path: 'test-info',
        loadChildren: () =>
          import('../../pages/test-info/modules/test-info.module').then(
            (m) => m.TestInfoModule
          ),
      },
      {
        path: 'question',
        loadChildren: () =>
          import('../../pages/question/modules/question.module').then(
            (m) => m.QuestionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
