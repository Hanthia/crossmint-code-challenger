// Angular modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MegaverseComponent } from './components/megaverse/megaverse.component';
import { ConvertToIconPipe } from './pipes/convert-to.icon.pipe';

// Pipes



const _modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

];

const _declarations = [
  MegaverseComponent,
  ConvertToIconPipe
];

@NgModule({
  declarations: [..._declarations],
  imports: [..._modules],
  exports: [..._declarations, ..._modules]
})
export class SharedModule {}
