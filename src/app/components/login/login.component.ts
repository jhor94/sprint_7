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
  public emailMessage: string | null = ""

  public formLogin: FormGroup = this.formBuild.group({
    email: ["", Validators.required, Validators.email],
    password: ["", Validators.required],
  })
  submitted: any;

  LoginIn() {
    this.submitted = true;
    if (this.formLogin.invalid) {
      this.emailMessage = "no funciona el formulario"
      console.log('error formulario')
      return;
    }

    const user: User = this.formLogin.value
    this.accesoService.checkEmail(user.email).subscribe(emailExists => {
      if (emailExists) {
        this.accesoService.login(user.email, user.password).subscribe({
          next: (response) => {
            if (response && response.accessToken) {
              localStorage.setItem('token', response.accessToken)
              this.router.navigate(['starship'])
              console.log("logeado correcto")
            } else {
              alert("error al registrar por token")
            }
          },
          error: (error) => {
            console.log("error al registrarse", error)
          }
        });
      }else{
        this.emailMessage = "correo ya existente"
        console.log("entra error login bien ya que no existe correo")
      }

    })
  }

  register() {
    this.router.navigate(['register'])
  }
}

