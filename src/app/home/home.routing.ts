import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component'

const homeRoutes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: HomeComponent, pathMatch: 'full'},
        ]
    },
];

export const HomeRouting = RouterModule.forChild(homeRoutes);
