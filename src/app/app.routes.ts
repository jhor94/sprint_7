import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsDetailsComponent } from './components/starships-details/starships-details.component';
import { accesoGuard } from './guards/acceso.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'starship', component: StarshipsComponent, canActivate:[accesoGuard] },
    {path: 'starship/:id', component: StarshipsDetailsComponent, canActivate:[accesoGuard]},

    //redirection
    {path: '***', redirectTo: '', pathMatch:'full'}
];
