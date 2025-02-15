import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

export const appRoutes: Routes = [
    { path: 'login',component:LoginComponent }, // Default route
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route

    // { path: '**', component: NotFoundComponent } // Wildcard route (404 page)
  ];


// Enable component input binding for better Angular 19 support
