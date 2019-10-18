import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {

  constructor() { }

  getApiUrl(): string {
    return globalThis.customEnvironment.api.url;
  }
}
