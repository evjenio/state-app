import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const STYLES = (_theme: ThemeVariables) => ({ });

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);


  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
