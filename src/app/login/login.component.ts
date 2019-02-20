import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : User = new User();
  dataIsCorrect = true;

  constructor(
    private dataSrv : DataService, 
    private sharedSrv : SharedService, 
    private router : Router
    ) { }

  validateLogin() {
    var email = this.userModel.email;
    var pass = this.userModel.password;

    // to validate the data
    // get all the users from the service
    var allUsers = this.dataSrv.getAllUsers();

    // compare the data with each user
    this.dataIsCorrect = false;
    for(let i = 0; i < allUsers.length; i++) {
      var user = allUsers[i];
      if(user.email == email && user.password == pass) {
        // the login info is correct
        console.log('logged');
        this.dataIsCorrect = true;
        this.sharedSrv.setLoggedUser(user);

        // send the user to another component
        this.router.navigate(["/user"]);
      }
    }
  }

  ngOnInit() {
  }

}
