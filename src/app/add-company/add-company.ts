import { Component, inject } from '@angular/core';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-add-company',
  standalone:true,
  imports: [
     MatDialogModule
  ],
  templateUrl: './add-company.html',
  styleUrl: './add-company.css',
})
export class AddCompany {
  constructor(private dialogRef:MatDialogRef<AddCompany>){}
  closeDialog(){
    this.dialogRef.close();
  }
}
