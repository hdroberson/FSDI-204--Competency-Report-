import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loggedUser : User;

  constructor() { }

  setLoggedUser(user : User) {
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  isLoggedIn() {
    if(this.loggedUser)
      return true;
    else 
      return false;
  }
}
