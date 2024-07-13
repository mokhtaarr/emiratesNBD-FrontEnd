import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  currentLange!:string;
  showPassword: boolean = false;

  constructor(
    private accountService:AccountService,
    private router:Router,
    private activatedRoute:ActivatedRoute,private fb: FormBuilder,
  ){}

  loginForm = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
  
  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe({
      next:user=>this.router.navigateByUrl('/')
    })
   }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
}
}
