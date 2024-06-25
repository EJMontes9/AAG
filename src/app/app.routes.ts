import {Routes} from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";
import {HomeComponent} from "./page/home/home.component";
import {CreacionmemosComponent} from "./page/creacionmemos/creacionmemos.component";
import {CreacionoficiosComponent} from "./page/creacionoficios/creacionoficios.component";
import {AuthGuard} from "./guards/auth.guard";
import {MenuComponent} from "./component/menu/menu.component";

export const routes: Routes = [

  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'addmemo', component: CreacionmemosComponent, canActivate: [AuthGuard]},
  {path: 'addoficio', component: CreacionoficiosComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'notfound', component: NotFoundComponent},
];
