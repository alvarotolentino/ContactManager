import { Component, OnInit } from '@angular/core';

import { IContact } from '../model/icontact';
import { ContactServiceService } from '../service/contact-service.service';

@Component({
  selector: 'cm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ContactServiceService]
})
export class NavbarComponent implements OnInit {

  pageTitle = 'Contacts';
  listFilter: string;
  errorMessage: string;
  contacts: IContact[];
  selected: IContact;

  constructor(private _contactService: ContactServiceService) { }

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts,
      error => this.errorMessage = <any>error);
  }

}



