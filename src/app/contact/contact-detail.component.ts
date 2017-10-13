import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IContact } from '../model/icontact';

@Component({
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: IContact;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

}
