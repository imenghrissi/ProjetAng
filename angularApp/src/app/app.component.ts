import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userservice: UserService) { }
  title = 'angularApp';
  listUsers;
  idUser;
  ngOnInit() {
    this.getlistusers();
  }
  Onsubmit(userform: NgForm) {
    let user = {
      email: userform.value.email,
      username: userform.value.firstname,
      lastname: userform.value.lastname
    }
    this.userservice.addUser(user).subscribe((data) => {
      this.getlistusers();
      console.log(data);
    }, error => {
      console.log(error);
    }
    );


  }
  getlistusers() {
    this.userservice.getListUsers().subscribe((data) => {
      this.listUsers = data;
      console.log(data);
    });
  }
  deletetUser(idUser){
    this.userservice.deleteUser(idUser).subscribe((data) => {
      
      console.log(data);
    });
  }
}
