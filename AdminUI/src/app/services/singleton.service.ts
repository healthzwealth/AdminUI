import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
baseAPIUrl = 'http://3.90.206.41:8081';
public isLoggedIn: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);  


setIsLoggedIn(status){
  this.isLoggedIn.next(status);
}
  constructor() { }
}