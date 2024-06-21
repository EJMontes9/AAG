import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";
import {HomeComponent} from "./page/home/home.component";
import {CreacionmemosComponent} from "./page/creacionmemos/creacionmemos.component";
import {CreacionoficiosComponent} from "./page/creacionoficios/creacionoficios.component";

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'addmemos', component: CreacionmemosComponent},
    {path: 'addoficios', component: CreacionoficiosComponent},
    {path: 'Login', component: LoginComponent},
    {path: '**', component: NotFoundComponent},
];
