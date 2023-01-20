import { UserModel } from "./models/user";

export class GetUsersAction {
  static readonly type = '[User] Get';
  constructor(public users: UserModel[]) {}
}