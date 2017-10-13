import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IContact } from '../model/icontact';

export class ContactData implements InMemoryDbService {

    createDb() {
        const contacts: IContact[] = [
            {
                'id': 1,
                'name': 'Alvaro',
                'email': 'alvaro.tolentino@ibm.com',
                'streetAddress1': 'Begonias 415',
                'telephone': 11111,
                'cellphone': 99999999,
                'city': 'Lima',
                'country': 'Peru',
                'notes': 'Test1',
                'avatar': 'A',
            },
            {
                'id': 2,
                'name': 'Juan',
                'email': 'juan.tolentino@ibm.com',
                'streetAddress1': 'Begonias 415',
                'telephone': 22222,
                'cellphone': 88888888,
                'city': 'Lima',
                'country': 'Peru',
                'notes': 'Test2',
                'avatar': 'J',
            },
            {
                'id': 3,
                'name': 'Luis',
                'email': 'luis.tolentino@ibm.com',
                'streetAddress1': 'Begonias 415',
                'telephone': 33333,
                'cellphone': 77777777,
                'city': 'Lima',
                'country': 'Peru',
                'notes': 'Test3',
                'avatar': 'L',
            },
            {
                'id': 4,
                'name': 'Mario',
                'email': 'luis.tolentino@ibm.com',
                'streetAddress1': 'Begonias 415',
                'telephone': 33333,
                'cellphone': 66666666,
                'city': 'Lima',
                'country': 'Peru',
                'notes': 'Test3',
                'avatar': 'L',
            },
            {
                'id': 5,
                'name': 'Miguel',
                'email': 'luis.tolentino@ibm.com',
                'streetAddress1': 'Begonias 415',
                'telephone': 33333,
                'cellphone': 55555555,
                'city': 'Lima',
                'country': 'Peru',
                'notes': 'Test3',
                'avatar': 'L',
            },
            {
                'id': 6,
                'name': 'Karen',
                'email': 'luis.tolentino@ibm.com',
                'streetAddress1': 'Begonias 415',
                'telephone': 33333,
                'cellphone': 55555555,
                'city': 'Lima',
                'country': 'Peru',
                'notes': 'Test3',
                'avatar': 'L',
            }
        ];
        return { contacts };
    }
}
