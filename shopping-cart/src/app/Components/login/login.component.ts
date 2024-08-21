import { Component,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username: string = '';
  password: string = '';

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('User logged in successfully!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
}
