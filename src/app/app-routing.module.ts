import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { AuthGuard } from './common/guards/auth.guard';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';

const routes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '403', component: ForbiddenComponent },
  { path: '500', component: InternalServerComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    matcher: (url) => {
      const user_type = localStorage.getItem('user_type');
      console.log(user_type);
      if (user_type === 'CompanyAgent') {
        return url.length ? { consumed: [] } : { consumed: url };
      }
      return null;
    },
    loadChildren: () =>
      import('./layouts/company/company-layout.module').then(
        (m) => m.CompanyLayoutModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
