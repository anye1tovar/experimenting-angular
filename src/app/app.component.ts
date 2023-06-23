import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spotify';
  public person = { firstName: 'First', lastName: 'Last' };
  public bgColor = '';
}
