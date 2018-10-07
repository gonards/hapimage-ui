import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import { MediaModule } from './media/media.module';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

const Routes: Routes = [
  {path: '', loadChildren: () => MediaModule},
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      Routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
