import { Component, OnInit, Input } from '@angular/core';
import {Contacts} from '../mock-contacts';
import {Contact} from '../contact';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input()
  selectedContact: Contact;
  constructor() { }
  ngOnInit() {
  }

}
