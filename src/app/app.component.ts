import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsdi';
  userName: string = "Harold Roberson";
  counter = 1;

  sayHello() {
    console.log("I'm a ts method");
    console.log(this.userName);
  }

  increase() {
    this.counter += 1;
  }
}
