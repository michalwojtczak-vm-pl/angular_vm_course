import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { BtnLoadingDirective } from './directives/btn-loading.directive';
import { IncrementPipe } from './pipes/increment.pipe';

const MODULES = [
  CommonModule,
  ReactiveFormsModule
]

const COMPONENTS = [
  ButtonComponent,
  BtnLoadingDirective,
  IncrementPipe
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
      ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
