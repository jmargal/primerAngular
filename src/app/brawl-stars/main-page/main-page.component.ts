import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters = [
    { name: 'Nitta', health: 3200 },
    { name: 'Colt', health: 900 },
    { name: 'Shelly', health: 1800 },
    { name: 'Pipe', health: 1200 },
    { name: 'Bull', health: 3400 },
  ];
}
