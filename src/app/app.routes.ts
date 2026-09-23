import { Routes } from '@angular/router';
import { Pesticide } from './pages/pesticide/pesticide';
import { Seed } from './pages/seed/seed';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { NewEntry } from './new-entry/new-entry';
import { Photostate } from './pages/photostate/photostate';
import { Company } from './pages/company/company';
import { ComapnyForm } from './comapny-form/comapny-form';
import { SeedForm } from './seed-form/seed-form';
import { PesticideForm } from './pesticide-form/pesticide-form';
import { Customer } from './pages/customer/customer';
import { CustomerForm } from './customer-form/customer-form';
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
    },
    {
        path:'company',
        component:Company
    },
    {
        path:'company-form',
        component:ComapnyForm
    },{
        path:'seed-form',
        component:SeedForm
    },{
        path:'pesticide-form',
        component:PesticideForm
    },{
        path:'customer-page',
        component:Customer
    },{
        path:'customer-form',
        component:CustomerForm
    }

];
