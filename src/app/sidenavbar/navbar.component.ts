import { Component, OnInit } from '@angular/core';

import { IContact } from '../model/icontact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'cm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ContactService]
})
export class NavbarComponent implements OnInit {

  pageTitle = 'Contacts';
  listFilter: string;
  errorMessage: string;
  contacts: IContact[];
  selected: IContact;

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts,
      error => this.errorMessage = <any>error);
  }

}



