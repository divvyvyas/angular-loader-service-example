import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<any> = null;

  constructor() {
    // Implement Auto Login Inside Constructor Only
  }

  login(){
    // set response to currentUserSubject
  }

  logout(){

  }
}
