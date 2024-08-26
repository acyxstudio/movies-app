import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoIconComponent} from '../icons/video-icon/video-icon.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,VideoIconComponent,SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
