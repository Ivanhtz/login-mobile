import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    this.loginForm.reset();
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.loginForm.get(pControlName)?.hasError(pError) && this.loginForm.get(pControlName)?.touched) {
      return true
    } else {
      return false
    }
  }
}
