import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { SubmitComponent } from './components/form/submit/submit.component';
import { HomeComponent } from './components/home/home.component';
import { SubmittedApplicationsComponent } from './components/submitted-applications/submitted-applications.component';
import { SubmitGuard } from './guard/submit.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'submit',
    component: SubmitComponent,
    canActivate: [SubmitGuard],
  },
  {
    path: 'applications',
    component: SubmittedApplicationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
