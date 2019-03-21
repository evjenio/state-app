import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../ngrx/actions/user.action';
import { AppState } from '../ngrx/app.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const STYLES = (_theme: ThemeVariables) => ({
  paper: {
    margin: '.5em',
    padding: '1em',
    width: '100%',
    maxWidth: '360px',
    button: {
      marginAfter: '1em'
    }
  }
});

@Component({
  selector: 'app-paper2',
  templateUrl: './paper2.component.html'
})
export class Paper2Component implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);

  users$: Observable<User[]>;
  selected$: Observable<number>;

  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(128)
    ]),
    age: new FormControl(0, Validators.required),
    id: new FormControl(0, Validators.required)
  });

  constructor(
    private theme: LyTheme2,
    private store: Store<AppState>
  ) {
    this.users$ = store.select(x => x.user.users);
    this.selected$ = store.select(x => x.user.selectedId);
  }

  ngOnInit() {
  }

  get name() {
    return this.userForm.get('name')!;
  }

  addUser(user: User) {
    this.store.dispatch(new UserActions.AddUser(user));
  }

  selectUser(user: User) {
    this.store.dispatch(new UserActions.SelectUser(user.id));
  }

  onSubmit() {
    this.addUser(this.userForm.value);
  }

}
