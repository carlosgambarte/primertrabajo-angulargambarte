import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import {MatTableModule} from '@angular/material/table';
import { FormAlumnosComponent } from './componentes/form-alumnos/form-alumnos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AlumnosComponent,
    FormAlumnosComponent
  ],
  imports: [
    CommonModule,
     MatTableModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatButtonModule,
    
  ],

  exports: [AlumnosComponent],
})
export class AlumnosModule { }
