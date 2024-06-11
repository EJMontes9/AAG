import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";
import {authGuard} from "./guards/auth.guard";
import {HomeComponent} from "./page/home/home.component";

export const routes: Routes = [
    {path: 'Home', component: HomeComponent,canActivate: [authGuard]},
    {path: 'Login', component: LoginComponent},
    {path: '**', component: NotFoundComponent},
];
