import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationlistComponent } from '../reservationlist/reservationlist.component';
import { ReservationformComponent } from '../reservationform/reservationform.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationlistComponent,
    ReservationformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
