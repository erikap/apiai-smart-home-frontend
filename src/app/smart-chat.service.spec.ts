/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SmartChatService } from './smart-chat.service';

describe('Service: SmartChat', () => {
  beforeEach(() => {
    addProviders([SmartChatService]);
  });

  it('should ...',
    inject([SmartChatService],
      (service: SmartChatService) => {
        expect(service).toBeTruthy();
      }));
});
