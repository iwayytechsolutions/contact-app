import { Contact } from './../model/contact.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    private contactList : Contact[] = [ 
        { id : "1", name : 'Mark', group : 'Friend', mobile : '9003597598', email : 'mark@gmail.com', birthDate : '06-Jan-1987', imagePath : '../assets/images/person1.jpg'  },
        { id : "2", name : 'Jhon', group : 'Friend', mobile : '6363412541', email : 'jhon@gmail.com', birthDate : '18-Oct-1988', imagePath : '../assets/images/person2.jpg'  },
        { id : "3", name : 'Harry', group : 'Friend', mobile : '7812879619', email : 'harry@gmail.com', birthDate : '21-Dec-1994', imagePath : '../assets/images/person3.jpg'  }
    ];


    public getContactList() {
        return this.contactList;
    }

    public getContactById(id : string) {
        for(let i = 0; i < this.contactList.length; i++) {
            if(this.contactList[i].id == id) {
                return this.contactList[i];
            }
        }   
    }

}