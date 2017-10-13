import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ContactService } from '../service/contact.service';
import { IContact } from '../model/icontact';

@Injectable()
export class ContactResolver implements Resolve<IContact> {

  constructor(private contactService: ContactService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IContact> {
    const id = route.params['id'];
    if (isNaN(id)) {
      this.router.navigate(['/contacts']);
      return Observable.of(null);
    }

    return this.contactService.getContact(+id)
      .map(contact => {
        if (contact) {
          return contact;
        }
        this.router.navigate(['/contacts']);
        return null;
      })
      .catch(error => {
        this.router.navigate(['/contacts']);
        return Observable.of(null);
      });
  }
}
