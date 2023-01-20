import { UserModel } from "src/app/user/models/user";
import { Store } from '@ngxs/store';
import { ApiService } from "../api/api.service";
import { GetUsersAction } from "src/app/user/user.actions";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
@Injectable()
export class UserService {
  constructor(private apiService: ApiService,private store: Store) {}

  getAllUsers(name: string) {
    this.apiService.getUsers().pipe(map(userData => userData.filter(user => user.name.toLowerCase().includes(name))))
    .subscribe((users: UserModel[]) => {
      this.store.dispatch(new GetUsersAction(users));
    })
  }
}