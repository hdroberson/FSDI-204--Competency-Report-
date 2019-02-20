import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [];


  constructor(public dataSrv : DataService) {
    this.users = dataSrv.getAllUsers();
    console.log('I have', this.users);
  }
  


  ngOnInit() {
  }

  addNew() {
  }

}
