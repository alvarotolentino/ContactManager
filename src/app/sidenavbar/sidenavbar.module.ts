import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar.component';
import { ContactService } from '../service/contact.service';
import { NavbarResolver } from './navbar-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavbarComponent,
        resolve: { contacts: NavbarResolver },
        outlet: 'navbar'
      }
    ])
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    ContactService,
    NavbarResolver
  ]
})
export class SidenavbarModule { }
