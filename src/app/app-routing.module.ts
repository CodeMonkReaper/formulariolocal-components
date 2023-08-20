import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'clase4-sum-rest',
    loadChildren: () => import('./clase4-sum-rest/clase4-sum-rest.module').then( m => m.Clase4SumRestPageModule)
  },
  {
    path: 'logincl4',
    loadChildren: () => import('./logincl4/logincl4.module').then( m => m.Logincl4PageModule)
  },
  {
    path: 'regcl4',
    loadChildren: () => import('./regcl4/regcl4.module').then( m => m.Regcl4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
