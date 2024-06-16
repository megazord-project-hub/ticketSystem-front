import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(module => module.LoginModule) },
  { path: 'home', loadChildren: () => import('./features/shell/shell.module').then(module => module.ShellModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home/projetos' },
  { path: 'not-found', loadChildren: () => import('./features/not-found/not-found.module').then(module => module.NotFoundModule) },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
