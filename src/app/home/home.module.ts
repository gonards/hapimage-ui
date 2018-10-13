import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// modules
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from '../shared/media/card/card.component';
import { HomeRouting } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HomeRouting
    ],
    declarations: [
        HomeComponent,
        CardComponent
    ],
})

export class HomeModule {
    constructor() {
    }
}
