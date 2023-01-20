import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { UserModel } from './models/user';
import { UserSelectors } from './user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:  [ UserService ]
})
export class UserComponent {
  name: string = '';
  @Select(UserSelectors.userItems) userItems$!:Observable<UserModel[]>

  constructor(private userService: UserService) {}

  onChangeName(event : Event) {
    this.name = (<HTMLInputElement>event.target).value.trim();
  }

  onSearchUser() {
    this.userService.getAllUsers(this.name.toLowerCase());
  }
}
