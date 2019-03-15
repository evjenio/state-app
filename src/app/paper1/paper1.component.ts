import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const STYLES = (_theme: ThemeVariables) => ({
  paper: {
    margin: '.5em',
    padding: '1em'
  }
});

@Component({
  selector: 'app-paper1',
  templateUrl: './paper1.component.html'
})
export class Paper1Component implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);

  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
