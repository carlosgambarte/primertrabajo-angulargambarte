import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrl: './form-alumnos.component.scss'
})
export class FormAlumnosComponent {
 constructor(private fb: FormBuilder) { }
}


