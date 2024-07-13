import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomersService } from '../../Services/customers.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customers } from '../../Models/customers';
import { CutomerDeleteConfirmComponent } from '../cutomer-delete-confirm/cutomer-delete-confirm.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-emirates-customers',
  templateUrl: './emirates-customers.component.html',
  styleUrls: ['./emirates-customers.component.scss']
})
export class EmiratesCustomersComponent implements OnInit{
  dataSource: any;
  displayedColumns: string[] = ['isActive', 'customerCode', 'customerDescA', 'customerDescE','email','remarks'];
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  DisabledPrevButton: boolean = false;
  DisabledNextButton: boolean = false;
  firstRow: boolean = false;
  lastRow: boolean = false;
  DeleteDisable :boolean = true;
  SaveDisable : boolean = true;
  UpdateDisable : boolean = true;

  EditReadonly : boolean = false;
  reloadDisabled : boolean = true;
  UndoDisabled : boolean = true;
  undoIndex!: number;

  AllCustomers : Customers[] = [];
  
  constructor(private CustomerService: CustomersService , private fb:FormBuilder,private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ){
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.displayedColumns= ['isActive','customerDescE'];
      } else {
          this.displayedColumns= ['isActive', 'customerCode', 'customerDescA', 'customerDescE','email','remarks'];
      }
    });
  }

  ngOnInit(): void {
    this.customerForm.disable();
   this.GetAllCustomers();
  }

  
customerForm = this.fb.group({
  customerId:[0],
  customerCode:['',Validators.required],
  customerDescA:['',Validators.required],
  customerDescE:['',Validators.required],
  email:[''],
  remarks:[''],
  isActive:[false]
});

GetAllCustomers(){
  this.CustomerService.GetAllCustomers().subscribe(res=>{
    this.AllCustomers = res;
    this.dataSource = new MatTableDataSource<Customers>(this.AllCustomers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
  }


  
  onSumbit(){
    this.CustomerService.AddCustomer(this.customerForm.value).subscribe(res=>{
      if(res.status){
        this.GetAllCustomers();
        this.customerForm.disable();
        this.customerForm.get('customerId')?.setValue(res.id)
        this.DisabledNextButton = false;
        this.DisabledPrevButton = false;
        this.lastRow = false;
        this.firstRow = false;
        this.SaveDisable=true;
        this.UpdateDisable = false;
        this.UndoDisabled = true;
        this.DeleteDisable=false;

      }
    });  
  }

  getLastRowData(){
    this.AllCustomers = this.dataSource.filteredData
    const LastItem = this.AllCustomers[this.AllCustomers.length-1];
    if(LastItem){
      this.customerForm.setValue({
        customerId: LastItem.customerId ?? null,
        customerCode:LastItem.customerCode ?? null,
        customerDescA: LastItem.customerDescA ?? null,
        customerDescE: LastItem.customerDescE ?? null,
        email: LastItem.email ?? null,
        remarks: LastItem.remarks?? null,
        isActive: LastItem.isActive ?? null
      });
      this.firstRow = false;
    this.lastRow = true;
    this.DisabledPrevButton = false;
    this.DisabledNextButton = true;
    this.UpdateDisable = false;
    this.DeleteDisable = false;
    }
  }

  getPrevRowData(){
    this.AllCustomers = this.dataSource.filteredData;
    const index = this.AllCustomers.findIndex(p=>p.customerId == this.customerForm.value.customerId);
    const PrevItem = this.AllCustomers[index - 1];
    if(PrevItem){
      this.customerForm.setValue({
        customerId: PrevItem.customerId ?? null,
        customerCode:PrevItem.customerCode ?? null,
        customerDescA: PrevItem.customerDescA ?? null,
        customerDescE: PrevItem.customerDescE ?? null,
        email: PrevItem.email ?? null,
        remarks: PrevItem.remarks?? null,
        isActive: PrevItem.isActive ?? null
      });
      this.firstRow = false;
      this.lastRow = false;
      this.UpdateDisable = false;
      this.DeleteDisable = false;

      const firstItem = this.AllCustomers.findIndex(p=>p.customerId == this.customerForm.value.customerId);

       if(firstItem === 0){
            this.DisabledPrevButton = true;
            this.firstRow = true;
       }
       
      this.DisabledNextButton = false;

    }
  }

  getNextRowData(){
    this.AllCustomers = this.dataSource.filteredData;
    const index = this.AllCustomers.findIndex(p=>p.customerId == this.customerForm.value.customerId);
    const nextItem = this.AllCustomers[index + 1];
    if(nextItem){
      this.customerForm.setValue({
        customerId: nextItem.customerId ?? null,
        customerCode:nextItem.customerCode ?? null,
        customerDescA: nextItem.customerDescA ?? null,
        customerDescE: nextItem.customerDescE ?? null,
        email: nextItem.email ?? null,
        remarks: nextItem.remarks?? null,
        isActive: nextItem.isActive ?? null
      });
      this.firstRow = false;
      this.UpdateDisable = false;
      this.DeleteDisable = false;
      const LastItem = this.AllCustomers.findIndex(p=>p.customerId == this.customerForm.value.customerId);
      if(this.AllCustomers.length -1 === LastItem){
        this.DisabledNextButton = true;
        this.lastRow = true;
      }
      this.DisabledPrevButton = false;
    }
  }

  getFirstRowData(){
    this.AllCustomers = this.dataSource.filteredData
    const FirstItem = this.AllCustomers[0];
    if(FirstItem){
      this.customerForm.setValue({
        customerId: FirstItem.customerId ?? null,
        customerCode:FirstItem.customerCode ?? null,
        customerDescA: FirstItem.customerDescA ?? null,
        customerDescE: FirstItem.customerDescE ?? null,
        email: FirstItem.email ?? null,
        remarks: FirstItem.remarks?? null,
        isActive: FirstItem.isActive ?? null
      });
      this.firstRow = true;
      this.lastRow = false;
      this.DisabledPrevButton = true;
      this.DisabledNextButton = false;
      this.UpdateDisable = false;
      this.DeleteDisable = false;
    }
  }

  Open_delete_confirm() {
    var _popup = this.dialog.open(CutomerDeleteConfirmComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
    _popup.afterClosed().subscribe((response) => {
      if (response) {
        this.CustomerService.DeleteCustomer(this.customerForm.value.customerId).subscribe(res=>{
          if(res){
            this.GetAllCustomers();
            this.customerForm.setValue({
             customerId: null,
             customerCode: null,
             customerDescA: null,
             customerDescE: null,
             email: null,
             remarks: null,
             isActive: null
           })
            this.DeleteDisable = true;
            this.UpdateDisable = true;
            
          }
        })
           
      }
    });
  }


undo(){
  this.customerForm.disable();
    const undoItem = this.AllCustomers[this.undoIndex]
    if(undoItem){

      this.customerForm.setValue({
        customerId: undoItem.customerId ?? null,
        customerCode:undoItem.customerCode ?? null,
        customerDescA: undoItem.customerDescA ?? null,
        customerDescE: undoItem.customerDescE ?? null,
        email: undoItem.email ?? null,
        remarks: undoItem.remarks?? null,
        isActive: undoItem.isActive ?? null
      });
      this.UpdateDisable = false;
      this.DisabledNextButton = false;
      this.DisabledPrevButton = false;
      this.lastRow = false;
      this.firstRow = false;
      this.reloadDisabled = false;
      this.SaveDisable = true;
      this.UndoDisabled = true;
      this.DeleteDisable = false;
    }else{
      this.customerForm.setValue({
        customerId: null,
        customerCode: null,
        customerDescA: null,
        customerDescE: null,
        email: null,
        remarks: null,
        isActive: null
      });
      this.UpdateDisable = false;
      this.DisabledNextButton = false;
      this.DisabledPrevButton = false;
      this.lastRow = false;
      this.firstRow = false;
      this.reloadDisabled = false;
      this.SaveDisable = true;
      this.UndoDisabled = true;
      this.DeleteDisable = false;
  }

}

updatecustomer(){
  this.customerForm.enable();
  this.DeleteDisable = true;
  this.DisabledNextButton = true;
  this.DisabledPrevButton = true;
  this.lastRow = true;
  this.firstRow = true;
  this.SaveDisable = false;
  this.EditReadonly = true;
  this.reloadDisabled = false;
  this.UpdateDisable = true;
  this.UndoDisabled = false;
  this.AllCustomers = this.dataSource.filteredData;
  this.undoIndex = this.AllCustomers.findIndex(p=>p.customerId == this.customerForm.value.customerId);
}

New(){
  this.customerForm.enable();
  this.AllCustomers = this.dataSource.filteredData;
  this.undoIndex = this.AllCustomers.findIndex(p=>p.customerId == this.customerForm.value.customerId);
  this.customerForm.setValue({
    customerId: null,
    customerCode: null,
    customerDescA: null,
    customerDescE: null,
    email: null,
    remarks: null,
    isActive: null
  });
  this.DisabledNextButton = true;
  this.DisabledPrevButton = true;
  this.lastRow = true;
  this.firstRow = true;
  this.UpdateDisable = true;
  this.SaveDisable = false;
  this.EditReadonly = false;
  this.reloadDisabled = true;
  this.DeleteDisable = true;
  this.UndoDisabled = false; 
}

Filterchange(data: Event) {
  const value = (data.target as HTMLInputElement).value;
  this.dataSource.filter = value;
}

fillForm(row : Customers){
if(row){
  this.customerForm.setValue({
    customerId: row.customerId ?? null,
    customerCode:row.customerCode ?? null,
    customerDescA: row.customerDescA ?? null,
    customerDescE: row.customerDescE ?? null,
    email: row.email ?? null,
    remarks: row.remarks?? null,
    isActive: row.isActive ?? null
  });
  this.UpdateDisable = false;
  this.DeleteDisable = false;
  this.UndoDisabled = true;
  window.scrollTo({ top: 30, behavior: 'smooth' });
}



}
}
