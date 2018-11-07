import { Component, OnInit } from '@angular/core';
import {Contacts} from '../mock-contacts';
import {Contact} from '../contact';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts = Contacts;
  selectedContact: Contact;
  constructor() { }

  ngOnInit() {
  }
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
