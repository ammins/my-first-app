import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { TemplatefrmComponent } from './templatefrm/templatefrm.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, //default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reactive', component: ReactivefrmComponent },
  { path: 'temp', component: TemplatefrmComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
