import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Contador';
  counter: number = 10;
  base: number = 3;

  aggregate(value:number){
    this.counter+=value;
  }
}
