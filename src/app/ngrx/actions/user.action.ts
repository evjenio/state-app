import { Action } from '@ngrx/store'
import { User } from 'src/app/model/user.model';

export const ADD_USER = '[USER] Add'
export const SELECT_USER = '[USER] Select'

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) { }
}

export class SelectUser implements Action {
  readonly type = SELECT_USER

  constructor(public payload: number) { }
}

export type Actions = AddUser | SelectUser
