import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IContact } from '../model/icontact';

@Injectable()
export class ContactService {

  private baseUrl = 'api/contacts';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getContacts(): Observable<IContact[]> {
    return this.http.get(this.baseUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getContact(id: number): Observable<IContact> {
    if (id === 0) {
      return Observable.of(this.initializeContact());
    }

    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteContact(id: number): Observable<Response> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, this.options)
      .catch(this.handleError);
  }

  saveContact(contact: IContact): Observable<IContact> {
    if (contact.id === 0) {
      return this.createContact(contact);
    }
    return this.updateContact(contact);
  }

  private createContact(contact: IContact): Observable<IContact> {
    contact.id = undefined;
    return this.http.post(this.baseUrl, contact, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private updateContact(contact: IContact): Observable<IContact> {
    const url = `${this.baseUrl}/${contact.id}`;
    return this.http.put(url, contact, this.options)
      .map(() => contact)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    const body = response.json();
    return body || {};
  }

  private handleError(error: Response): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }

  initializeContact(): IContact {
    return {
      id: 0,
      name: null,
      email: null,
      streetAddress1: null,
      telephone: null,
      cellphone: null,
      city: null,
      country: null,
      notes: null,
      avatar: null
    };
  }

}
