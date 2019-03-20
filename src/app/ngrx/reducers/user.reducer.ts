import { UserState } from '../state/user.state';
import * as UserActions from './../actions/user.action'
import { User } from 'src/app/model/user.model';

const initalUserState: UserState = {
  users: null,
  selectedId: null
};

export function reducer(state: UserState = initalUserState, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.ADD_USER:
      const newUser: User = action.payload;
      return {
        ...state,
        users: [...state.users, newUser]
      };

    case UserActions.SELECT_USER:
      const id = action.payload;
      return {
        ...state,
        selectedId: id
      };
    default:
      return state;
  }
}
