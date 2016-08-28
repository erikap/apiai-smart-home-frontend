import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { SmartChatService } from '../smart-chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.sass']
})
export class HomeComponent implements OnInit {

  messages: Message[];
  
  constructor(private smartChatService : SmartChatService) { }

  ngOnInit() {
    this.messages = this.smartChatService.getMessages();
  }

  submitMessage(value: string): void {
    this.smartChatService.submitMessage({text: value, sender: 'You'});
  }

}
