import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME, LyCommonModule } from '@alyle/ui';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyGridModule } from '@alyle/ui/grid';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyCardModule } from '@alyle/ui/card';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyListModule } from '@alyle/ui/list';
import { LyFieldModule } from '@alyle/ui/field';
import { LyBadgeModule } from '@alyle/ui/badge';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { Paper1Component } from './paper1/paper1.component';
import { Paper2Component } from './paper2/paper2.component';
import { Paper3Component } from './paper3/paper3.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IntroComponent } from './intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducers/user.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    Paper1Component,
    Paper2Component,
    Paper3Component,
    ToolbarComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    LyThemeModule.setTheme('minima-light'),

    LyCommonModule,
    LyButtonModule,
    LyBadgeModule,
    LyTypographyModule,
    LyToolbarModule,
    LyGridModule,
    LyCardModule,
    LyIconModule,
    LyAvatarModule,
    LyListModule,
    LyFieldModule,
    // NGRX
    StoreModule.forRoot({ user: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
