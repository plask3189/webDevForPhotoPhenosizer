import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { mainPage } from './mainPage/mainPage.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: mainPage }]),
  ],
  declarations: [AppComponent, TopBarComponent, mainPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
