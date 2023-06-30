import { Component, Input } from '@angular/core';
import { Iuser } from 'src/app/core/interfaces/iuser.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: Iuser;

}
