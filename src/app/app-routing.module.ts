import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewPostComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
