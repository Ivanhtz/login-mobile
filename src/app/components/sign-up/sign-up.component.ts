import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm.value);

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
