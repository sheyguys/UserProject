import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: firebase.User;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLoggedInUser()
      .subscribe(user => {
        this.user = user;
      })
  }

  logout() {
    this.loginService.logout();
  }

}