import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routing';
import { AngularFirestoreModule } from '@angular/fire/firestore/public_api';
import { AngularFireAuthModule } from '@angular/fire/auth/public_api';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
