import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFilterPipe } from './contact-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactFilterPipe],
  exports: [ContactFilterPipe]
})
export class SharedModule { }
