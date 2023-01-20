import { Injectable } from "@angular/core";
import { State,Action,StateContext } from '@ngxs/store';
import { UserModel } from "./models/user";
import { GetUsersAction } from "./user.actions";

export interface UserStateModel {
  items: UserModel[]
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    items: []
  }
})

@Injectable()
export class UserState {
  @Action(GetUsersAction)
  getUsers(ctx: StateContext<UserStateModel>,action: GetUsersAction) {
    const { users } = action;
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: users
    })
  }
}