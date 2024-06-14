import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  themes: string[] = ['Theme 1', 'Theme 2', 'Theme 3']; // Replace with actual data fetching logic
  
  constructor() {}

  ngOnInit(): void {
    console.log('Themes:', this.themes);
    // Example data fetching logic
    // Uncomment the next line to add themes and test dynamic blocks
     this.themes = ['Theme 1', 'Theme 2', 'Theme 3'];
  }
}
