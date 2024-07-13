import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cutomer-delete-confirm',
  templateUrl: './cutomer-delete-confirm.component.html',
  styleUrls: ['./cutomer-delete-confirm.component.scss']
})
export class CutomerDeleteConfirmComponent {
  Delete_confirm : boolean = false ;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private ref:MatDialogRef<CutomerDeleteConfirmComponent>){

  }

  deleteConfirm(){
    this.Delete_confirm = true;
    this.ref.close(this.Delete_confirm)
   }

   closepopup(){
    this.ref.close(this.Delete_confirm);
  }
}
