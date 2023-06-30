import { Component } from '@angular/core';
import { Iuser } from 'src/app/core/interfaces/iuser.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users: Iuser[] = [];


  constructor(private userService: UsersService) { }


  ngOnInit(): void {

    this.getUsersArray();

  }

  onDeleteUser(userId: string): void {
    this.users = this.users.filter(user => user.id !== userId);
  }


  private getUsersArray(): void {
    this.userService.getUsers().subscribe((response: any) => {
      const users = response.items;
      this.users = users;
    },
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    )
  }

}
