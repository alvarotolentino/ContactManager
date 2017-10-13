import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IContact } from '../model/icontact';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageTitle = 'Contacts';
  listFilter: string;
  errorMessage: string;
  contacts: IContact[];
  selected: IContact;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contacts = this.route.snapshot.data['contacts'];
  }

}



