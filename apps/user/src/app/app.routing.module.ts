import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    loadChildren: () =>
      import('./core/main-layout/modules/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
  },
=======
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
>>>>>>> 9f6a64c... feat(home): chang burger menu in responsive and make routing and change button hover
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
