import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  input: any = {
    fname: '',
    lname: '',
    stuid: '',
    major: '',
    email: '',
    username: '',
    password: '',
    gender: '',
    birth: ''
  }

  constructor(private userService: UserService , private httpClient: HttpClient) { }

  ngOnInit() {
  }
  register(){
    this.httpClient.get('http://localhost:12345/user/' + this.input.fname + '/' + this.input.lname + '/' + this.input.stuid + '/' + this.input.major + '/' + this.input.email
    + '/' + this.input.username + '/' + this.input.password)
    .subscribe(
      data => {
        alert("Register Successfully!!");
          console.log('POST Request is successful', data);
      },
      error => {
       alert("Error POST!!");
           console.log('Rrror', error);
     }

    );

  }

}
