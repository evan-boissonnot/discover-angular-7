import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: string[] = [];

  constructor() { }

  add(value: string): void {
      this._messages.push(value);
  }

  clear(): void {
    this._messages = [];
  }

  get messages(): string[] {
    return this._messages;
  }

  get isWithMessages(): boolean {
    return this._messages.length > 0;
  }
}
