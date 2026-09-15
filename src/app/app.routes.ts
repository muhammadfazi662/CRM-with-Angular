import { Routes } from '@angular/router';
import { Pesticide } from './pages/pesticide/pesticide';
import { Seed } from './pages/seed/seed';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { NewEntry } from './new-entry/new-entry';
import { Photostate } from './pages/photostate/photostate';
export const routes: Routes = [
    {path:'',
     component:Home
    },
    {
        path: 'pesticide',
        component:Pesticide
    },
    {
        path:'seed',
        component:Seed
    },
    {
        path:'dashboard',
        component:Dashboard
    },
    {
        path:'new-entry',
        component:NewEntry
    },
    {
        path:'photostate',
        component:Photostate
    }

];
