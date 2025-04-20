import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {

}
