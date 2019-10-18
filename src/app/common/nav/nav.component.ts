import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private as: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    /* this.as.currentUser.subscribe(
      user => this.isLoggedIn = user
      ); */
  }

  loggedIn(): boolean {
    return this.as.currentUserValue !== null;
  }

  onLogout(): void {
    this.as.logout();
    this.router.navigateByUrl("/login");
  }

}
