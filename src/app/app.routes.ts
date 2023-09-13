import { Routes } from '@angular/router';
import { BankingComponent } from './pages/banking.component';
import { HomeComponent } from './pages/home.component';
import { LoginComponent } from './pages/login.component';
import { SignupComponent } from './pages/signup.component';
import { ForgotpasswordComponent } from './pages/forgotpassword.component';
import { ChangepasswordComponent } from './pages/changepassword.component';
import { MenumanagementComponent } from './pages/menumanagement.component';
import { TestComponent } from './pages/test.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [{ path: 'banking', component: BankingComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'menumanagement', component: MenumanagementComponent },

  { path: 'test', component: TestComponent },
];
