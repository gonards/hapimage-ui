import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeModule} from './home/home.module';

const Routes: Routes = [
    {path: '', loadChildren: () => HomeModule},
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HomeModule,
        RouterModule.forRoot(
            Routes),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
