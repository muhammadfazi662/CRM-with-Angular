import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Pesticide } from '../pages/pesticide/pesticide';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Seed } from '../pages/seed/seed';
import { Phtostate } from '../phtostate-form/phtostate';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Home } from '../pages/home/home';
@Component({
  selector: 'app-sidebar',
  imports: [Pesticide,Seed,Phtostate,Dashboard,Home,RouterLink,RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
}
