import { ContactService } from './../services/contact.service';
import { Contact } from './../model/contact.model';
import { Card } from './../model/card.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList : Contact[];
  cardList : Card[] = [];

  constructor(private router : Router, private contactService : ContactService) { }

  
  ngOnInit() {
    
    this.contactList = this.contactService.getContactList();

    for(let i = 0; i < this.contactList.length; i++) {
      this.cardList.push({ id : this.contactList[i].id, name : this.contactList[i].name, group : this.contactList[i].group, imagePath : this.contactList[i].imagePath});
    }

  }

  onCardSelected(card) {
    console.log('onCardSelected', card);
    this.router.navigate(['contacts', card.id]);
  }

 
}
