import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(public navController: NavController, public formBuilder: FormBuilder) { 
    this.loginForm = formBuilder.group({
      'userInput': ['', Validators.compose([Validators.required])],
      'passInput': ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

}
