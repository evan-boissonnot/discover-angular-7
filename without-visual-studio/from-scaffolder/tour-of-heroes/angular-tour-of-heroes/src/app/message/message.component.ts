import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _messageLogger: MessageService) { }

  ngOnInit() {
  }

  clearMessages(): void {
    this._messageLogger.clear();
  }

  get messages(): string[] {
    return this._messageLogger.messages;
  }

  get isWithMessages(): boolean {
    return this._messageLogger.isWithMessages;
  }
}
