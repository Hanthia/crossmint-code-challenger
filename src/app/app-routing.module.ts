import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const default_route = 'home';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule)
  },
  { path: '', redirectTo: default_route, pathMatch: 'full' },
  { path: '**', redirectTo: default_route }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
