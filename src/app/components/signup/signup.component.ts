import { Component } from '@angular/core';

interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userData: UserData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSubmit() {
    // Check if passwords match
    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match!');
      this.userData.password = '';
      this.userData.confirmPassword = '';
      return;
    }
    alert('Signup successfull!');
    this.userData.name = '';
    this.userData.email = '';
    this.userData.password = '';
    this.userData.confirmPassword = '';
  }
}
