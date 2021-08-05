import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobHirerComponent } from './job-hirer.component';

const routes: Routes = [
  {
    path:'',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobHirerRoutingModule { }
