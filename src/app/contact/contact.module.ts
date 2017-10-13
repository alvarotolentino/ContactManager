import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactEditComponent } from './contact-edit.component';

import { ContactService } from '../service/contact.service';
import { ContactResolver } from './contact-resolver.service';
import { ContactFilterPipe } from '../shared/contact-filter.pipe';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      },
      {
        path: ':id',
        component: ContactDetailComponent,
        resolve: { contact: ContactResolver }
      },
      {
        path: ':id/edit',
        component: ContactEditComponent,
        resolve: { contact: ContactResolver }
      }
    ])
  ],
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactEditComponent
  ],
  providers: [
    ContactService,
    ContactResolver
  ]
})
export class ContactModule { }
