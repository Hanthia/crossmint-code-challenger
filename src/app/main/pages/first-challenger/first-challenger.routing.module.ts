import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChallengerComponent } from './first-challenger.component';
const routes: Routes = [
  { path: '', component: FirstChallengerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstChallengerRoutingModule {}
