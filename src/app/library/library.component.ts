import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements AfterViewInit {
  @ViewChild('editWorkbench', { static: false }) editWorkbench!: ElementRef;

  themes: string[] = ['Theme 1', 'Theme 2', 'Theme 3']; // Replace with actual data fetching logic
  
  constructor() {}

    ngAfterViewInit(): void {
      console.log('ngAfterViewInit called');
      console.log('Edit Workbench ViewChild:', this.editWorkbench);
      if (this.editWorkbench && this.editWorkbench.nativeElement) {
        console.log('Edit Workbench NativeElement:', this.editWorkbench.nativeElement);
        this.editWorkbench.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log("Could not find edit workbench element");
      }
   }
  // ngOnInit(): void {
  //   console.log('Themes:', this.themes);
  //   // Example data fetching logic
  //   // Uncomment the next line to add themes and test dynamic blocks
  //    this.themes = ['Theme 1', 'Theme 2', 'Theme 3'];
  // }
   scrollToEditWorkbench() {
    const editWorkbenchElement = document.getElementById('editWorkbenchId');
    if (editWorkbenchElement) {
      editWorkbenchElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log("Could not find edit workbench element");
    }
  }
}
