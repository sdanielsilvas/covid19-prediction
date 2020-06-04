import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  registerForm: FormGroup;
  email: string;
  password: string;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor(private loginService: LoginService) {
    this.registerForm = new FormGroup({
      email: new FormControl('sdanielsilvas@gmail.com'),
      password: new FormControl('daniel123'),
    });
   }

  ngOnInit(): void {
    
  }

  tryRegister(value){
    this.loginService.signup("sdanielsilvas@gmail.com", "daniel123");
  }

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    debugger
  }

}
