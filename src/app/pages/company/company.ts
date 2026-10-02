import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompany } from '../../add-company/add-company';
import { ColDef } from 'ag-grid-community';
import {  GridApi, GridReadyEvent } from 'ag-grid-community';
import {AgGridAngular} from 'ag-grid-angular';


@Component({
  selector: 'app-company',
  imports: [AgGridAngular],
  templateUrl: './company.html',
  styleUrl: './company.css',
})
export class Company {
  private dialog = inject(MatDialog);
  private gridApi!: GridApi;

  openComapnyDialog(){
    this.dialog.open(AddCompany,{
      width:'90%',
      maxWidth:'600px',
      panelClass:'company-dialog'
    });
  }


  rowData = [
  {
    id: 1,
    companyName: 'ABC Traders',
    type: 'Pesticide',
    phone: '03001234567',
    address: 'Faisalabad',
    saleofficername:'Shabir Ahmed',
    saleoffiercontact:'03007010239'
  },
  {
    id: 2,
    companyName: 'Green Seeds',
    type: 'Seed',
    phone: '03111234567',
    address: 'Lahore',
    saleofficername:'Rana Shahid',
    saleoffiercontact:'03008476116'
  }
];
columnDefs: ColDef[] = [
  {
    field: 'id',
    headerName: 'ID'
  },
  {
    field: 'companyName',
    headerName: 'Company Name'
  },
  {
    field: 'type',
    headerName: 'Type'
  },
  {
    field: 'phone',
    headerName: 'Phone'
  },
  {
    field: 'address',
    headerName: 'Address'
  },
  {
    field: 'saleofficername',
    headerName: 'SaleOfficerName'
  },
  {
    field:'saleoffiercontact',
    headerName:'SaleOfficer Contact'
  },{
    headerName:'Actions',
    cellRenderer:(params:any) =>{
      return ` <button class="btn btn-primary btn-sm edit-btn">
        Edit
      </button>

      <button class="btn btn-danger btn-sm delete-btn">
        Delete
      </button>`;
    }
  }
];

}
