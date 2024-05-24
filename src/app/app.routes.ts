import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign-up', component: HomeComponent },
  { path: 'sign-in', component: SignUpComponent },
    { path: '**', component: SignInComponent }

];
