import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsDetailsComponent } from './components/starships-details/starships-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'starship', component: StarshipsComponent },
    {path: 'starship/:id', component: StarshipsDetailsComponent },

    //redirection
    {path: '***', redirectTo: '', pathMatch:'full'}
];
