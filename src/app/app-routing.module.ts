import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Paper1Component } from './paper1/paper1.component';
import { Paper2Component } from './paper2/paper2.component';
import { Paper3Component } from './paper3/paper3.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'paper1',
    component: Paper1Component
  },
  {
    path: 'paper2',
    component: Paper2Component
  },
  {
    path: 'paper3',
    component: Paper3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
