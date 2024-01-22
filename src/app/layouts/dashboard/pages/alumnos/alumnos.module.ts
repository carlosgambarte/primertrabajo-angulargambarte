import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule, MatTableModule
  ],

  exports: [AlumnosComponent],
})
export class AlumnosModule { }
