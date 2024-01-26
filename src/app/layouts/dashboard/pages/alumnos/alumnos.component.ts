import { Component } from '@angular/core';
import { alumnos } from './modelos';





@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] =['id', 'nombre', 'apellido', 'email','edad' ];
  dataSource: alumnos[] =[
    {
      id: 1,
      nombre: "ismael",
      apellido: "gambarte",
      email: "gambarte@gmail.com",
      edad: 18,
    }
  ] ;
}
