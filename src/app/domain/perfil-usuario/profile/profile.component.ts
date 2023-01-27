import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../seguridad/services/user.service';
import {NbToastrService} from '@nebular/theme';
import Swal from 'sweetalert2';
import {User} from '../../../auth/models/user';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public usuario: User;
  public perfilForm: FormGroup;
  public passwordForm = this.formBuilder.group({
    c_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    r_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
  });

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private toastrService: NbToastrService) {
    this.usuario = this.authService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.formBuilder.group({
      name: [this.usuario.name, [Validators.required]],
      username: [this.usuario.username, [Validators.required]],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  edituser() {
    this.userService.updateUser(this.usuario._id, this.perfilForm.value)
      .subscribe(resp => {
        const {name, username, email} = resp.userUpdate;
        this.usuario.name = name;
        this.usuario.username = username;
        this.usuario.email = email;
        this.toastrService.success('User Edited successfully!', 'Done!');
      });
  }

  cambiarPassword() {
    this.userService.changePassword(this.usuario._id, this.passwordForm.value)
      .subscribe(resp => {
          this.passwordForm.reset();
          this.toastrService.success('Password Updated Successfully!', 'Done!');
        },
        error => Swal.fire('Error', error.error.message, 'error'));
  }

}
