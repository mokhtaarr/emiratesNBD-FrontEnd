import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { User } from '../Models/userInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSource= new BehaviorSubject<User|null>(null);
  currentUser$=this.currentUserSource.asObservable();
  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient,private router:Router,
    private toastr:ToastrService,private activatedRoute:ActivatedRoute) { }



  register(values:any)
  {
    return this.http.post<User>(this.baseUrl+'Account/register',values).pipe(
      map(res=>{
        localStorage.setItem('token',res.token)
        var messageEn = res.messageEn;
        var statu = res.statu

        if(statu == true)
        {
          this.toastr.success(messageEn);
          this.router.navigateByUrl('/login');
          this.currentUserSource.next(res);
        }

        if(statu == false)
        this.toastr.error(messageEn);

      })
    )
  }


  login(values:any)
  {
    return this.http.post<User>(this.baseUrl+'Account/login',values).pipe(
      map(user=>{
        var statu = user.statu;
        var messageEn = user.messageEn;

        if(statu == true)
        {
          localStorage.setItem('token',user.token);
          this.currentUserSource.next(user);
          this.router.navigateByUrl('/')
          this.toastr.success(messageEn);
        }

        if(statu == false)
        {
          this.toastr.error(messageEn);
        }
             
        return user;

      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/')
    this.toastr.success("Successfully logged out")
  }


}
