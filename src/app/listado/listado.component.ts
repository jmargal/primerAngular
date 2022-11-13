import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  alumnos: string[] = ['Javi', 'Ferzari', 'Juanma', 'Florian'];
  aprobados: string[] = [];

  approve(): void {
    this.aprobados.push(this.alumnos.pop() || '');
  }
}
