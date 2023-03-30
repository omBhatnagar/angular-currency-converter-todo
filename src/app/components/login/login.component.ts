import { Component } from '@angular/core';

interface UserData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: UserData = {
    email: '',
    password: '',
  };

  onSubmit() {
    alert('Login successfull!');
  }
}
