import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./_pages/main/main.module').then(m => m.MainModule) },
  { path: 'main', loadChildren: () => import('./_pages/main/main.module').then(m => m.MainModule) },
  { path: 'login', loadChildren: () => import('./_pages/login/login.module').then(m => m.LoginModule) },
  { path: 'about', loadChildren: () => import('./_pages/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
