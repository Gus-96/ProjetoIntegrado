import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private routerCadastro: Router,
    private routerHome: Router
    ){ }

  ngOnInit() {
  }

  goToCadastro(){
    this.routerCadastro.navigate(['/cadastro'])
  }
  goToHome(){
    this.routerHome.navigate(['/home'])
  }


}
