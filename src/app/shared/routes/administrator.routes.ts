import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Administrator_ROUTES: Routes = [
  {
    path: 'administrator',
    loadChildren: () => import('../../administrator/administrator.module').then(m => m.AdministratorModule)
  }
];
