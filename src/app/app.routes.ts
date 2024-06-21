import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";
import {HomeComponent} from "./page/home/home.component";
import {CreacionmemosComponent} from "./page/creacionmemos/creacionmemos.component";
import {CreacionoficiosComponent} from "./page/creacionoficios/creacionoficios.component";
import {authGuard} from "./guards/auth.guard";


export const routes: Routes = [
    {path: 'Home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'addmemos', component: CreacionmemosComponent, canActivate: [authGuard]},
    {path: 'addoficios', component: CreacionoficiosComponent, canActivate: [authGuard]},
    {path: '**', component: NotFoundComponent},
];