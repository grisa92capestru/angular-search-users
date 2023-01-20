import { Selector } from "@ngxs/store";
import { UserModel } from "./models/user";
import { UserState, UserStateModel } from "./user.state";

export class UserSelectors {
  @Selector([UserState])
  static userItems(state: UserStateModel): UserModel[] {
    return state.items;
  }
}