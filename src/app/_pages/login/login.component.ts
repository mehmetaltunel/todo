import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { log } from 'console';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }
  allertMessage: string = '';
  showAllert: boolean = false;
  model: any = {
    userName: '',
    password: '',

  }

  ngOnInit(): void {
  }

  login() {
    this.showAllert = false;
    let userInf = environment.userInf;
    if (userInf.userName == this.model.userName) {
      if (userInf.password == this.model.password) {
        localStorage.setItem("canLogin", "true");
        this._router.navigate(['/main']);
      }
      else {
        this.showAllert = true;
        this.allertMessage = "Şifre Yanlış!";
      }
    }
    else {
      this.allertMessage = "Kullanıcı bulunamadı";
      this.showAllert = true;
    }
  }

}
