import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserListComponent } from './user-list/user-list.component';

import{FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserFormComponent,
    MainPageComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
