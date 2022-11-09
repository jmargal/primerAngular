import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl:'./contador.component.html' 
  })

export class ContadorComponent{
    title: string = 'Contador';
    counter: number = 10;
    base: number = 3;
  
    aggregate(value:number){
      this.counter+=value;
    }
}