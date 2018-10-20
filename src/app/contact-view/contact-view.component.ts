import { Contact } from './../model/contact.model';
import { ContactService } from './../services/contact.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  constructor(private router: Router, private route : ActivatedRoute, private contactService : ContactService) { }
  contact : Contact;

  ngOnInit() {
    //console.log(this.route.snapshot.params["id"]);
    this.route.params.subscribe(params => {
     
      this.contact = this.contactService.getContactById(params.id);
    });

  
  }


}
