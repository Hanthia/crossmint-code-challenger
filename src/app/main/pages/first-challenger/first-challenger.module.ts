import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FirstChallengerComponent } from './first-challenger.component';
import { SharedModule } from '../../shared/shared.module';
import { FirstChallengerRoutingModule } from './first-challenger.routing.module';
// Modules


@NgModule({
  declarations: [
    FirstChallengerComponent,

  ],
  imports: [CommonModule, SharedModule, FirstChallengerRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstChallengerModule {}
