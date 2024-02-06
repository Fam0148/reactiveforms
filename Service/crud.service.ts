import { Injectable } from '@angular/core';
import { ReservationStructure } from '../Interface/reservation-structure';

@Injectable({
  providedIn: 'root'
})

export class CrudService
{
  private reservations:ReservationStructure[]=[];


  get():ReservationStructure[]
  {
    return this.reservations
  }

  getById(id: string): ReservationStructure|undefined
  {
    return this.reservations.find(res => res.id === id);
  }

  add(reservation:ReservationStructure)
  {
    this.reservations.push(reservation);
    
  }

  update(updated:ReservationStructure): void
  {
    let indexs = this.reservations.findIndex(res => res.id === updated.id);
    this.reservations[indexs] = updated;
    
  }

  delete(id: string): void
  {
    let index =  this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
   
  }

}
