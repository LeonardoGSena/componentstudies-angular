import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    { title: 'This course expires?', content: 'No! It will be yours forever!!' },
    { title: 'Can i cancel any time?', content: 'You have 7 days to cancel with chashback, just e-mail making a request!' },
    { title: 'This course is for me?', content: 'It is for anyone who really wants to become a professional. No prior background needed!' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
