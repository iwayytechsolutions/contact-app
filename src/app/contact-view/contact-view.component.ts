import { Contact } from './../model/contact.model';
import { ContactService } from './../services/contact.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createEmptyStateSnapshot } from '@angular/router/src/router_state';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view-2.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  
  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }
  contactId : Number

  ngOnInit() {
    //console.log(this.route.snapshot.params["id"]);
    // this.route.params.subscribe(params => {
      // console.log("Contact view : ", params);
     // this.router.navigate(['contact/'+params.id+'/personal',params.id]);
    // });
    console.log("Contact View");
    console.log(this.route.firstChild.snapshot.params["id"])
    this.contactId = this.route.firstChild.snapshot.params["id"];


  }


}
