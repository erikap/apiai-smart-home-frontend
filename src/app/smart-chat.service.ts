import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, URLSearchParams } from '@angular/http';

import { Message } from './message';

@Injectable()
export class SmartChatService {

  private messages: Message[] = [
    { sender: 'Smart Home', text: 'Hi! What do you want to do?' }
  ];

  constructor(private http: Http) { }

  getMessages(): Message[] {
    return this.messages;
  }

  submitMessage(message: Message): void {
    this.messages.push(message);
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', message.text);
    this.http.get('/apiai', { search: params }).toPromise()
      .then(response => {
        var answer = response.json() as Message;
        this.messages.push(answer);    
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
