import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private router: Router) {}

  username!: string;
  password!: string;

  onLogin() {
    // Simulate login functionality without a server
    if (this.username === 'Jan' && this.password === 'Niezbędny') {
      this.router.navigate(['/board']);
      console.log("Logged in")
    } else {
      // Show an error message or perform any other desired action
      console.log("Not logged in")
    }
  }
}
