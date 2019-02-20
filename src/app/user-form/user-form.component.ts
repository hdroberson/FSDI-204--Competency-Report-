import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // properties / attributes
  componentTitle: string = "Register New User"; // or like this: componentTitle = "Create New User";
  userName: string;
  personalInfoShown: boolean = true;

  userModel : User = new User();

  arePasswordEqual: boolean = true;
  secondPassword: string;

  // constructor
  // this is automatically called when the userFormComponent is created
  // commonly use to initialize properties in the class
  constructor(public dataSrv : DataService) {
    console.log("I'm the UserFormComponent constructor");

    // example of working with classes
    /*
    var aUser = new User(
    "myUser", 
    "hdroberson@gmail.com", 
    "sammy1", 
    "Harold", 
    "Roberson"
    );
    
    // access attributes of the object
    console.log(aUser.email);

    // execute method of the object
    aUser.sayHello();
    */
  }

  // angular component lifecycle
  // this is automatically called once the conponent finish loading
  ngOnInit() {
    console.log("I'm the ngOnInit for UserFormComponent");
  }

  // methods / functions

  save() { 
    this.validatePassword();
    console.log(this.userModel);

    // save the user obj on a service
    this.dataSrv.addUser(this.userModel);

    // clean the object -> for another user
    this.userModel = new User();
  }

  validatePassword(){
    var pass1 = this.userModel.password;
    var pass2 = this.secondPassword;
    if(pass1 != pass2) this.arePasswordEqual = false;
    else this.arePasswordEqual = true;

    console.log(this.arePasswordEqual);
  }
    
  hide() {
    this.personalInfoShown = false;
  }

  show() {
    this.personalInfoShown = true;
    
  }
  

}
