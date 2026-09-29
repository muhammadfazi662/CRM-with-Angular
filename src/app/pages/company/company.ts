import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompany } from '../../add-company/add-company';

@Component({
  selector: 'app-company',
  imports: [],
  templateUrl: './company.html',
  styleUrl: './company.css',
})
export class Company {
  private dialog = inject(MatDialog)
  openComapnyDialog(){
    this.dialog.open(AddCompany,{
      width:'700px',
      maxWidth:'95vw'
    });
  }
}
