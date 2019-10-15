import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  test: number = 0;

  constructor() { }

  log(message: string): void {
    console.log(message);
  }

  critical(message: string): void {
    console.error(message);
  }

}
