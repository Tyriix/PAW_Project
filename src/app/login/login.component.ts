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
    if (this.username === 'Jan' && this.password === 'Niezbędny') {
      this.router.navigate(['/board']);
      console.log("Logged in")
    } else {
      console.log("Not logged in")
    }
  }
}
