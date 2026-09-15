import { Component } from '@angular/core';
import { PesticideForm } from '../pesticide-form/pesticide-form';
import { SeedForm } from '../seed-form/seed-form';
import { Phtostate } from '../phtostate-form/phtostate';
@Component({
  selector: 'app-new-entry',
  imports: [PesticideForm,SeedForm,Phtostate],
  templateUrl: './new-entry.html',
  styleUrl: './new-entry.css',
})
export class NewEntry {
  selectedForm = '';
  showPesticideForm = false;
  openPesticideForm(){
    this.selectedForm = 'pesticide'
  }
  showSeedForm = false;
  openSeedForm(){
    this.selectedForm = 'seed';
  }
  showPhtoStateForm = false;
  openPhtoStateForm(){
    this.selectedForm = 'photostate';
  }
}
