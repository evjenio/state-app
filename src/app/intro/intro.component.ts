import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables, shadowBuilder } from '@alyle/ui';

const STYLES = (_theme: ThemeVariables) => ({
  grid: {
    padding: '1em'
  },
  button: {
    textAlign: 'center'
  }
});

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);


  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
