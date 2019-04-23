import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: firebase.User;

  constructor(
    private service: LoginService, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
      }); 
  }

  loginGoogle(){
    console.log('Login...Google');
    this.service.logingoogle(); 
  }

  loginFacebook(){
    console.log('Login...Facebook');
    this.service.loginfacebook(); 
  }

  logout(){
    this.service.logout();
  }
  
  register(){
    this.router.navigate(['/register']);
  }
}
