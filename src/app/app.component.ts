import { Component, OnInit, isDevMode } from '@angular/core';

import { environment } from "../environments/environment.prod";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development...')
    } else {
      console.log('Production...')
    }
  }
  title = 'GsAgendamentos';
}
