import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrl: './reservationform.component.css'
})

export class ReservationformComponent implements OnInit
{
  reservationForm : FormGroup = new FormGroup({});
  
  constructor(private formbuilder:FormBuilder){
  }
  
  ngOnInit(): void 
  {
    this.reservationForm = this.formbuilder.group({
      CheckIn:["",Validators.required],
      CheckOut:["",Validators.required],
      Name:["",[Validators.required,Validators.minLength(8)]],
      RoomNumber:["",Validators.required],
    })
  }

  onSubmit()
  {
    if(this.reservationForm.valid)
    {
      
    }
    else{
      console.log("Invalid");
    }
  }

}
