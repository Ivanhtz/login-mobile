import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iuser } from 'src/app/core/interfaces/iuser.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/core/services/users.service';
import { DialogComponent } from '../../dialog/dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: Iuser;
  @Output() userDeleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private userService: UsersService, private snackBar: MatSnackBar, private router: Router) { }

  viewUser(id: any) {
    this.userService.getUserById(id).subscribe(
      (data) => {
        const idUser = data.id;
        this.router.navigate([`./back/user-view/${idUser}`]);
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  deleteUser(id: any): void {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: { message: '¿Está seguro de que desea eliminar este usuario?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.userService.deleteUser(id).subscribe(() => {
          this.snackBar.open(`Usuario con ID: ${id} eliminado con éxito`, 'Cerrar', { duration: 3000 });
          this.userDeleted.emit(id);
        })
      }
    });
  }

}
