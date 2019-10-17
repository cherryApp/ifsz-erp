import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  error: any = "";

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService
    .login(
      this.user.userName,
      this.user.password
    )
    .toPromise()
    .then(
      data => {
        this.router.navigateByUrl("/");
      },
      err => {
        this.error = err;
      }
    )
  }

}
