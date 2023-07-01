import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/core/interfaces/iuser.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  user!: Iuser;

  constructor(private userService: UsersService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.aRoute.params.subscribe((params: any) => {
      let idResponse = params.id;

      this.userService.getUserById(idResponse).subscribe((user) => {
        this.user = user;
      },
        (error) => {
          console.error('Error al obtener el usuario', error);
        }
      )
    })

  }

}
