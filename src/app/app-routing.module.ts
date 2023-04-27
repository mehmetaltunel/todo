import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./_pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./_pages/home/home.module').then(m => m.HomeModule) },
  { path: 'category', loadChildren: () => import('./_pages/home/category/category.module').then(m => m.CategoryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
