import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  email: string;
  password: string;

  constructor(private loginService: LoginService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  login() {
    var router = this.router;
    this.loginService.login(this.email, this.password, function(uid){
      var uid = uid
      router.navigate(['/upload-photo']); 
    });
    
  }


}
