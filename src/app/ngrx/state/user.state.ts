import { User } from 'src/app/model/user.model';

export interface UserState {
  users: User[];
  selectedId: number
}
