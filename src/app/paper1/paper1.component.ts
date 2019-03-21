import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../ngrx/actions/user.action';
import { AppState } from '../ngrx/app.state';

const STYLES = (_theme: ThemeVariables) => ({
  paper: {
    margin: '.5em',
    padding: '1em',
    width: '100%',
    maxWidth: '360px'
  }
});

@Component({
  selector: 'app-paper1',
  templateUrl: './paper1.component.html'
})
export class Paper1Component implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);

  users$: Observable<User[]>;
  selected$: Observable<number>;

  constructor(
    private theme: LyTheme2,
    private store: Store<AppState>
  ) {
    this.users$ = store.select(x => x.user.users);
    this.selected$ = store.select(x => x.user.selectedId);
  }

  ngOnInit() {
  }

  addUser() {
    const user = { id: 3, name: 'Alice', age: 29 };
    this.store.dispatch(new UserActions.AddUser(user));
  }

}
