import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  passwordRegex: string = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
  public registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('.+@.+\..+')]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],

  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.registerForm.value)
      .subscribe(resp => {
          this.router.navigate(['/auth/login']);
        },
        err => {
          Swal.fire('Oops...', err.error.message, 'error');
        })
    ;
  }

}
