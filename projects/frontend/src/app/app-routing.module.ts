import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagenotfoundComponent } from './error-pages/error-pagenotfound/error-pagenotfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QueuesComponent } from './pages/queues/queues.component';
import { WorkersComponent } from './pages/workers/workers.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'queues', component: QueuesComponent },
  { path: 'workers', component: WorkersComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ErrorPagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
