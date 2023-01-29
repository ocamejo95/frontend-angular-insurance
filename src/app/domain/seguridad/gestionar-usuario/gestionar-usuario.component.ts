import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {LocalDataSource} from 'ng2-smart-table';
import {UserService} from '../services/user.service';
import {NbToastrService} from '@nebular/theme';
import {AuthService} from '../../../auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss'],
})
export class GestionarUsuarioComponent implements OnInit {
  public ifShow = false;
  public title;

  public createUserForm = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
    },
    actions: {
      add: true,
      position: 'right',
    },
    mode: 'external',

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private toastrService: NbToastrService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.userService.getAllUser()
      .subscribe(resp => {
        this.source = resp.resultFind;
      });
  }

  onDeleteConfirm(event) {
    if (event.data._id === this.authService.usuario._id) {
      return Swal.fire({
        title: 'Info',
        text: 'You can not delete yourself!',
        icon: 'info',
        confirmButtonColor: '#497bff',
      });
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#497bff',
      cancelButtonColor: '#ff4274',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(event.data._id)
          .subscribe(resp => {
            this.getListUser();
            this.toastrService.success('User deleted successfully!', 'Done!');
          });
      }
    });
  }

  onUpdateConfirm(event) {
    this.title = 'Edit User';
    this.ifShow = true;
    this.createUserForm = this.formBuilder.group({
      id: [event.data._id],
      name: [event.data.name, Validators.required],
      username: [event.data.username, Validators.required],
      email: [event.data.email, [Validators.required, Validators.email]],
      password: [],
    });

  }

  openForm() {
    this.title = 'Create User';
    this.ifShow = true;
    this.createUserForm.reset();
  }

  cancel() {
    this.ifShow = false;
    this.createUserForm.reset();
  }

  submitCreate() {
    this.authService.register(this.createUserForm.value)
      .subscribe(resp => {
        this.getListUser();
        this.toastrService.success('User created successfully!', 'Done!');
        this.ifShow = false;
      });
  }

  submitUpdate() {
    this.userService.updateUser(this.createUserForm.value, this.createUserForm.value.id)
      .subscribe(resp => {
        this.getListUser();
        this.toastrService.success('User Edited successfully!', 'Done!');
        this.ifShow = false;
      });
  }

}
