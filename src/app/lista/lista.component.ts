import { Component } from '@angular/core';

@Component({
    selector: 'app-lista',
    templateUrl:'./lista.component.html' ,
    styleUrls:['./lista.component.css']
  })

export class Lista{
    compra=[
        {element:'Cerveza',quantity:100},
        {element:'Huevos',quantity:24},
        {element:'Agua',quantity:20},
        {element:'Pan',quantity:4}
    ]
}