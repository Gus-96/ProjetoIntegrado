import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {

  constructor(private routerHome: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.routerHome.navigate(['/home'])
  }

}
