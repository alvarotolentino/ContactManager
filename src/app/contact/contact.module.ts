import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactServiceService } from '../service/contact-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent],
  providers: [ContactServiceService]
})
export class ContactModule { }
