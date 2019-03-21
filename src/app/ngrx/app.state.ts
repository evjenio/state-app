import { UserState } from './state/user.state';

export interface AppState {
  readonly user: UserState;
}
