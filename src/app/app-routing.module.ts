import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './layouts/administrator/administrator.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { Administrator_ROUTES } from './shared/routes/administrator.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: `login`,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },

  { path: '', component: AdministratorComponent, data: { title: 'Administrator' }, children: Administrator_ROUTES },
  {
    path: '**',
    // redirectTo: `pages/error`
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
