import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(32)],
    ],
  });

  submitted: boolean = false;

  public get FormControls() {
    return this.loginForm.controls;
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('FAILURE');
      return;
    }

    console.log('SUCCESS');
  }

  isControlValid(controlName: string): boolean {
    return !this.FormControls[controlName].errors;
  }
}
