import { Routes } from '@angular/router';
import {MenuComponent} from "./component/menu/menu.component";
import {LoginComponent} from "./page/login/login.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
    {path: 'Home', component: MenuComponent,canActivate: [authGuard]},
    {path: 'Login', component: LoginComponent},
    {path: '**', component: NotFoundComponent},
];
