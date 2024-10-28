import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { CommonModule } from '@angular/common';
import { StarshipsDetailsComponent } from "./components/starships-details/starships-details.component";


//material

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, 
      LoginComponent, 
      RegisterComponent, 
      StarshipsComponent, 
      CommonModule, 
      StarshipsDetailsComponent, 
      RouterModule,
      MatSlideToggleModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sprint_7';

  private accesoService = inject(AuthServiceService)
  private router = inject(Router)
  mensajeParaHija:string = 'mensaje a hija'

  showList: boolean = false;
  
  showshipsList(){
    this.showList = !this.showList;
  }

  isLoggedIn():boolean{
    return this.accesoService.IsLogin();
  }

  logOut(){
    this.accesoService.removeLogin();
    this.router.navigate(['/login'])
  }

}
