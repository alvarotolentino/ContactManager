import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from '../service/contact.service';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactEditComponent } from './contact-edit.component';
import { ContactResolverService } from '../service/contact-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent, ContactDetailComponent, ContactEditComponent],
  providers: [ContactService, ContactResolverService]
})
export class ContactModule { }
