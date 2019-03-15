import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const STYLES = (_theme: ThemeVariables) => ({ });

@Component({
  selector: 'app-paper3',
  templateUrl: './paper3.component.html'
})
export class Paper3Component implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);


  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
