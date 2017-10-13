import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ContactService } from '../service/contact.service';
import { IContact } from '../model/icontact';

@Injectable()
export class NavbarResolver implements Resolve<IContact[]> {
    constructor(private contactService: ContactService,
        private router: Router) { }

    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IContact[]> {
        return this.contactService.getContacts()
            .map(contacts => {
                if (contacts) {
                    return contacts;
                }
                return null;
            })
            .catch(error => {
                return Observable.of(null);
            });
    }
}
