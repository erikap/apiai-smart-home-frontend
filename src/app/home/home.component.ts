import { Component, OnInit, NgZone } from '@angular/core';
import { Message } from '../message';
import { SmartChatService } from '../smart-chat.service';

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.sass']
})
export class HomeComponent implements OnInit {

  zone: NgZone;
  
  messages: Message[];

  chat: String = '';
  recordingIcon: String = 'mic_none';
  
  constructor(private smartChatService : SmartChatService, zone : NgZone) {
    this.zone = zone;
  }

  ngOnInit() {
    this.messages = this.smartChatService.getMessages();
  }

  submitMessage(value: string): void {
    this.smartChatService.submitMessage({text: value, sender: 'You'});
    this.chat = '';
  }

  startVoiceRecording(): void {
    if ('webkitSpeechRecognition' in window) {
      const { webkitSpeechRecognition } : IWindow = <IWindow>window;
      const recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      
      recognition.start();
      this.recordingIcon = 'mic';
 
      recognition.onresult = (e) => {
        console.log('Transcript is: ' + e.results[0][0].transcript);
	this.zone.run( () => {
          this.recordingIcon = 'mic_none';
          this.smartChatService.submitMessage({text: e.results[0][0].transcript, sender: 'You'});
	});
        recognition.stop();
      };
 
      recognition.onerror = (e) => {
        console.log('An error occured: [' + e.error + '] ' + e.message);
        recognition.stop();
        this.zone.run( () => { this.recordingIcon = 'mic_none'; });
      }
    }
  }
}
