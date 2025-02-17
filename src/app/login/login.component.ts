import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService, private routeService:RouteService){}

  code:string = '';

  validate(){
    this.auth.login(this.code);
    if(this.auth.isLoggedIn){
      this.routeService.navigateToCakeRequestsView();
    }else{
      alert("Wrong Password");
    }
  }

}
