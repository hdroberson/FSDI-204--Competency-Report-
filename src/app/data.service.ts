import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // properties
  private userList : User [] = [];

  // constructor
  constructor() { 
    // for testing only: create admin user creditials
    var admin = new User("Admin", "admin@mail.com", "qwerty", "Admin", "User");
    this.userList.push(admin);
  }

  // methods
  addUser(userObject : User) {
  // perform some validations

    this.userList.push(userObject);

    console.log('the state of the array is', this.userList);
  }

  getAllUsers(){
    return this.userList;
  }
}
