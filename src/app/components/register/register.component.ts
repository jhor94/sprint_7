import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


//material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private accesoService = inject(AuthServiceService)
  private router = inject(Router)

  public formBuild = inject(FormBuilder)
  public successMessage : string | null = null
  public errorMessage : string | null = null
  public submitted: boolean | null = false


  

  public formRegister: FormGroup = this.formBuild.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  })
  

  registerIn() {
    this.submitted = true;
    if (this.formRegister.invalid) {
     this.errorMessage= "error formulario"
     return;
    }

    const user: User = this.formRegister.value


    this.accesoService.checkEmail(user.email).subscribe(emailExists =>{
        if (emailExists) {
          this.errorMessage = "El correo ya esta en uso";
          console.log("existe entra")
          return;
        } else {
          this.accesoService.register(user).subscribe({
            next: (response) => {
              console.log("registrado correctamente", response);

              if(response.accessToken){
                localStorage.setItem('token',response.accessToken);
                this.successMessage = "Registrado con exito"
                this.router.navigate(['starship'])
              }else{
                alert("error al registrar por token")
                console.log(user)
              }
            },
            error: (error) => {
              console.log("error al registrarse", error)
            }
          });
        }
 
    })

  }

    constructor(){
    }

  }