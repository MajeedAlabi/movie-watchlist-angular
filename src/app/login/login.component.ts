import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username = ""
  password = ""
  errorMessage = ""

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.trim().length === 0){
      this.errorMessage = "username is required"
    }else if(this.password.trim().length === 0){
      this.errorMessage = "password is required"
    }else{
      this.errorMessage=""
      let res = this.auth.login(this.username,this.password)
      if(res === 200){
        this.router.navigate(["home"])
      }
      if(res === 403){
        this.errorMessage = "Invalid Credentials"
      }
    }
  }
}
