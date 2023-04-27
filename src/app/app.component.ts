import { Component } from '@angular/core';
import { faHeartbeat, faCog} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HMS';
  faHeartbeat = faHeartbeat;
  faCog = faCog;
}
