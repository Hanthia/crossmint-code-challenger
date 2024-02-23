import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChallengerComponent } from './second-challenger.component';
const routes: Routes = [
  { path: '', component: SecondChallengerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondChallengerRoutingModule {}
