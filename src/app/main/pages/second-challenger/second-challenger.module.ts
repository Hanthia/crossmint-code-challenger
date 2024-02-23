import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SecondChallengerComponent } from './second-challenger.component';
import { SecondChallengerRoutingModule } from './second-challenger.routing.module';
// Modules


@NgModule({
  declarations: [
    SecondChallengerComponent,
  ],
  imports: [CommonModule, SharedModule, SecondChallengerRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecondChallengerModule {}
