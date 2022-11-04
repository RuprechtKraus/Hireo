import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup = this._formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
        ],
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
        ],
      ],
    },
    { validators: CustomValidators.MustMatch('password', 'repeatPassword') }
  );

  submitted: boolean = false;

  get FormControls() {
    return this.registerForm.controls;
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      console.log('FAILURE');
      return;
    }

    console.log('SUCCESS');
  }

  isControlValid(controlName: string): boolean {
    return !this.FormControls[controlName].errors;
  }
}
