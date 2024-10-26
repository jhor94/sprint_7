import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';


//material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ResponseAccess } from '../../interfaces/response-access';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatSlideToggleModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  private accesoService = inject(AuthServiceService)
  private router = inject(Router)

  public formBuild = inject(FormBuilder)

  public formLogin: FormGroup = this.formBuild.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  })

  LoginIn() {
    if (this.formLogin.invalid) {
      alert("error con el formulario")
      return;
    }

    this.accesoService.login(this.formLogin.value.email, this.formLogin.value.password)
    .subscribe(
      response => {
      if (response && response.accessToken) {
        localStorage.setItem('token', response.accessToken)
        this.router.navigate(['starship'])
        alert("logeado correcto")
      }
    },
      error => {
        console.log('error al iniciar sesion', error)
    })
}

register(){
  this.router.navigate(['register'])
}
}

