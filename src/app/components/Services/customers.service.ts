import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Customers } from '../Models/customers';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient,private toastr:ToastrService){ }

  GetAllCustomers(){
    return this.http.get<Customers[]>(environment.apiUrl + 'Customers/GetAllCustomers');
  }

  AddCustomer(values:any){
   return this.http.post<any>(environment.apiUrl+'Customers/AddCustomer',values).pipe(
    map((res)=>{
      var message = res.messageEn;
      var status = res.status;

      if(res.status == true)
        this.toastr.success(message);

      if(res.status == false)
        this.toastr.error(message);

      return res;
    }));
  }

  DeleteCustomer(customerId : any){
    return this.http.delete<any>(`${environment.apiUrl}Customers/DeleteCustomer?customerId=${customerId}`).pipe(
      map((res)=>{
        var message = res.messageEn;
        var status = res.status;
  
        if(res.status == true)
          this.toastr.success(message);
  
        if(res.status == false)
          this.toastr.error(message);
  
        return res;
      }));
  }
}
