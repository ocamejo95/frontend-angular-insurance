import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordRegex: string = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
  remember: boolean = false;
  submitted = false;
  errors: string;
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('.+@.+\..+')]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]],
    rememberme: [],

  });


  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email') || '';
    if (email.length > 1) {
      this.remember = true;
    }

    this.loginForm = this.formBuilder.group({
      email: [email, [Validators.required, Validators.pattern('.+@.+\..+')]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)]],
      rememberme: [this.remember],
    });
  }

  login() {
    if (this.loginForm.value.rememberme) {
      localStorage.setItem('email', this.loginForm.value.email);
    } else {
      localStorage.removeItem('email');
    }

    this.authService.login(this.loginForm.value)
      .subscribe((resp: any) => {
          this.submitted = true;
          this.router.navigate(['/domain']);
        },
        err => {
          this.errors = err.error.message;
        });
  }

}
