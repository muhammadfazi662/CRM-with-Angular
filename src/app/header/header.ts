import { Component, EventEmitter, Output,signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Sidebar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 @Output() toggleSidebar = new EventEmitter<void>();
 hideSideBar(){
  this.toggleSidebar.emit();
 }
 

}
