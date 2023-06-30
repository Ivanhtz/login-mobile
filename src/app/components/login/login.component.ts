import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthsService } from 'src/app/core/services/auths.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  private subscription!: Subscription;

  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService, private authService: AuthsService) { }

  ngOnInit() {

    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/back']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.loginForm.valid) {
      this.subscription = this.userService.login(this.loginForm.value).subscribe({
        next: (data) => {
          if (data && data.accessToken) {
            this.authService.saveToken(data.accessToken);
            this.router.navigate(['/back']);
          }
        },
        error: (error) => {
          let status = error.status || (error.error && error.error.status);

          switch (status) {
            case 400:
              alert('La solicitud es incorrecta o las credenciales no son correctas. Por favor, revisa los datos ingresados.');
              break;

            case 401:
            case 403:
              alert(
                'Las credenciales proporcionadas no son correctas. Por favor, inténtalo de nuevo.'
              );
              break;

            case 404:
              alert('Correo electrónico del usuario no encontrado o contraseña inválida');
              break;

            case 601:
              alert('El usuario no está validado');
              break;

            default:
              alert('Ha ocurrido un error inesperado');
          }
        }
      });
    }

    this.loginForm.reset();
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.loginForm.get(pControlName)?.hasError(pError) && this.loginForm.get(pControlName)?.touched) {
      return true
    } else {
      return false
    }
  }


  ngOnDestroy(): void {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }
}
