import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordConfirmationValidatorService } from 'src/app/common/custom-validators/password-confirmation-validator.service';
import { UserForRegistrationDto } from 'src/app/common/models/user/user-for-registration';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  public registerForm: FormGroup;
  public showSpinner: boolean = false;
  public errorMessage: string = '';
  public showError: boolean;
  constructor(
    private authService: AuthenticationService,
    private passConfValidator: PasswordConfirmationValidatorService,
    private router: Router,
    private toastrSerive: ToastrService
  ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl(''),
      userType: new FormControl('Candidate', [Validators.required]),
    });
    this.registerForm
      .get('confirm')
      .setValidators([
        Validators.required,
        this.passConfValidator.validateConfirmPassword(
          this.registerForm.get('password')
        ),
      ]);
  }

  public validateControl = (controlName: string) => {
    return (
      this.registerForm.get(controlName).invalid &&
      this.registerForm.get(controlName).touched
    );
  };
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName).hasError(errorName);
  };
  public registerUser = (registerFormValue) => {
    this.showSpinner = true;
    this.showError = false;
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm,
      userType: formValues.userType,
    };
    this.authService.registerUser('auth/register', user).subscribe({
      next: (_) => {
        this.router.navigate(['/auth/login']);
        this.toastrSerive.success(
          'Por favor inicie sesión',
          'Usuario registrado correctamente!'
        );
        this.showSpinner = false;
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = err;
        this.showError = true;
        this.showSpinner = false;
      },
    });
  };
}
