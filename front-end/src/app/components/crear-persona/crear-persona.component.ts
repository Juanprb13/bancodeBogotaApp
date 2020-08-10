import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PersonService } from "../../services/person.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  formGroup: FormGroup
  
  constructor(private formBuilder : FormBuilder,private personService:PersonService,private router:Router) { 
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({ 
      fullname:['',Validators.required],
      birth:['',Validators.required],
      typePerson:['',Validators.required]
    })
    console.log(this.formGroup);
    
  }
  crearPersona(){

    this.personService.agregarPersona(this.formGroup.value).subscribe(res=>{
      this.router.navigate(['list-persons'])
      console.log(res);
    },err=>{
      console.log("ha ocurrido un error");
      
    })
  }
}
