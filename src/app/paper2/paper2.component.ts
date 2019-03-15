import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const STYLES = (_theme: ThemeVariables) => ({ });

@Component({
  selector: 'app-paper2',
  templateUrl: './paper2.component.html'
})
export class Paper2Component implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);


  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
