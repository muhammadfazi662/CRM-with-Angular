import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { NewEntry } from './new-entry/new-entry';
import { Pesticide } from './pages/pesticide/pesticide';
import { Seed } from './pages/seed/seed';
import { Photostate } from './pages/photostate/photostate';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { SeedForm } from './seed-form/seed-form';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar,Header,NewEntry,Pesticide,Seed,Photostate,Dashboard,Home,SeedForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showSideBar = true;
  toggleSideBar(){
    this.showSideBar = !this.showSideBar;
  }
  
 
}
