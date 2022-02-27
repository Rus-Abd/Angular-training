import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [DisplayComponent, FormComponent],
  imports: [CommonModule],
  exports: [DisplayComponent, FormComponent],
})
export class CoreModule {}
