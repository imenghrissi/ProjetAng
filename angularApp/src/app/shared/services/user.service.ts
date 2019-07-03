import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient  ) { }
  
  getListUsers(){
    return this.http.get(environment.url);
  }
addUser(user){
  return this.http.post(environment.url ,user);
}
deleteUser(id){
  return this.http.delete(environment.url+id);
}
}
