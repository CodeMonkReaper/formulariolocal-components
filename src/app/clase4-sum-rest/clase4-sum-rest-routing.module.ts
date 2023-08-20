import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clase4SumRestPage } from './clase4-sum-rest.page';

const routes: Routes = [
  {
    path: '',
    component: Clase4SumRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Clase4SumRestPageRoutingModule {}
