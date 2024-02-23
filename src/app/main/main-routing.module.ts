import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
const default_route = 'first-challenger';
const routes: Routes = [
  { path: '', redirectTo: default_route, pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'first-challenger',
        loadChildren: () =>
          import('./pages/first-challenger/first-challenger.module').then(
            (m) => m.FirstChallengerModule
          ),
      },
      {
        path: 'second-challenger',
        loadChildren: () =>
          import('./pages/second-challenger/second-challenger.module').then(
            (m) => m.SecondChallengerModule
          ),
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
