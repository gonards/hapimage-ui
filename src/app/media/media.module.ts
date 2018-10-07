import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// routing
import {MediaRouting} from './media.routing';

// modules
import {CommonModule} from '@angular/common';
import { CardComponent } from './card/card.component';
import { CollectionComponent } from './collection/collection.component';
import { AlbumComponent } from './album/album.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MediaRouting,
    ],
    declarations: [
        CardComponent,
        CollectionComponent,
        AlbumComponent
    ],
})
export class MediaModule {
}
