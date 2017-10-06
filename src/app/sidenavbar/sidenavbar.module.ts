import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar.component';
import { ContactServiceService } from '../service/contact-service.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [ContactServiceService]
})
export class SidenavbarModule { }
