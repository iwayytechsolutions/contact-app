import { Contact } from './../model/contact.model';
import { ContactService } from './../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }
  contact: Contact;

  ngOnInit() {
    //console.log(this.route.snapshot.params["id"]);
    this.route.params.subscribe(params => {
      this.contact = this.contactService.getContactById(params.id);
    });
  }
}
