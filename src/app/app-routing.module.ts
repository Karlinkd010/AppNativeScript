import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { InfUserComponent } from './inf-user/inf-user.component';
import { LoginComponent } from './login/login.component';
import {CalculadoraComponent} from './calculadora/calculadora.component'
import { RegistroComponent } from './login/registro/registro.component';
import { Restablecer_passComponent } from './login/restablecer_pass/restablecer_pass.component';
import { GuardsService } from './service/guards.service';
import { EditPerfilComponent } from './inf-user/edit-perfil/edit-perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/inf-user', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'restablcer', component: Restablecer_passComponent},
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'edit-perfil', component: EditPerfilComponent },
  { path: 'inf-user', component: InfUserComponent ,canActivate: [GuardsService]},
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),  
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },

]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
