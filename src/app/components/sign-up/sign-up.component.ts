import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (!this.signUpForm.valid) {
      return;
    }

    // this.userService.registerUser(this.signUpForm.value);

    this.userService.registerUser(this.signUpForm.value).subscribe(
      response => {
        this.snackBar.open('Usuario Registrado Correctamente', 'Cerrar', { duration: 5000 });
        this.signUpForm.reset();
      },
      error => {
        console.error('Error al registrar usuario:', error);
      }
    );

    this.signUpForm.reset();
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.signUpForm.get(pControlName)?.hasError(pError) && this.signUpForm.get(pControlName)?.touched) {
      return true
    } else {
      return false
    }
  }
}
