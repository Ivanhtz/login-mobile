import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  textButton: string = 'Login';
  textPath: string = './login';


  constructor(private router: Router) { }

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



}
