import {Routes, RouterModule} from '@angular/router';
import {CardComponent} from './card/card.component';
import {AlbumComponent} from './album/album.component';
import {CollectionComponent} from './collection/collection.component';

const userRoutes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: CardComponent, pathMatch: 'full'},
            {path: 'album', component: AlbumComponent},
            {path: 'collection', component: CollectionComponent},
        ]
    },
];

export const MediaRouting = RouterModule.forChild(userRoutes);
