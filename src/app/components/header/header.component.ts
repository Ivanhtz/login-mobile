import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthsService } from 'src/app/core/services/auths.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  textButton: string = 'Login';
  textPath: string = './login';
  isAuthenticated!: Boolean;


  constructor(private router: Router, private authService: AuthsService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.updateTextButton();
        });
      }
    });
  }

  updateTextButton() {
    const currentUrl = this.router.url;
    this.isAuthenticated = this.authService.isAuthenticated();

    if (currentUrl === '/login') {
      this.textButton = 'Inicio';
      this.textPath = './home';
    } else {
      this.textButton = 'Login';
      this.textPath = './login';
    }
  }

  changeName() {
    this.updateTextButton();
  }


  logout() {
    this.authService.removeToken();
    this.router.navigate(['']);
  }

}
