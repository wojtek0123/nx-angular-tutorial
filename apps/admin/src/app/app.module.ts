import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonUiModule } from '@myorgtest/common-ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CommonUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
