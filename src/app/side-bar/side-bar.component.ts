import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ContentViewComponent } from '../content-view/content-view.component';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatSidenavModule, ContentViewComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
