import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showPassword: boolean = false;


  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {

  }


  registerForm = this.fb.group({
    displayName:['', [Validators.required, 
      Validators.pattern(/^(?!.*\s{2,})[^\d]+(\s[^\d]+)?$/),
      Validators.minLength(3) ,Validators.maxLength(20)]],

    PhoneNumber:['', [
      Validators.required,
      Validators.minLength(11) ,Validators.maxLength(11),Validators.pattern(/^0[0-9]{10}$/),
    ]],

    email:['',
    [
      Validators.required,
      Validators.minLength(5), 
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]
    ],

    password:['',
    [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$/),
      Validators.minLength(5),
      Validators.maxLength(20),
    ]]
  })

  onSubmit(){
   this.accountService.register(this.registerForm.value).subscribe({
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
}
}
