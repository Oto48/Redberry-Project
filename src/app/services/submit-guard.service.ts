import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitGuardService {
  private canEnter = false;
  constructor() {}

  setEnterStatus(value: boolean) {
    this.canEnter = value;
  }
  get enter() {
    return this.canEnter;
  }
}
