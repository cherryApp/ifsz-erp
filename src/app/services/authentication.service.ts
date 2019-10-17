import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl: string = "http://localhost:4000/users";
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  public currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {
    let localUser: string = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localUser)
    );
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string): Observable<any> {
    let url: string = `${this.apiUrl}/authenticate`;
    return this.http.post(url, {username, password})
      .pipe(tap(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
    }
    
  public logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}
