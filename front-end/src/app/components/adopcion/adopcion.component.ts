import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PersonService } from "../../services/person.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  persons :Person 
  adopter
  query 
  constructor(private personService : PersonService, private router:Router,private activateRoute : ActivatedRoute) { 
    this.activateRoute.params.subscribe(parm => this.adopter = parm['id'])
  }

  

  ngOnInit(): void {
    this.getPersons()
  }
  getPersons(){
    this.personService.getPersonsAvailable().subscribe(res=>{
      this.persons = res
      console.log(this.persons);
    },err=>{
      console.log(err);
    })
  }
  adop(person:Person){
    
    this.personService.getPerson(person._id).subscribe(res=>{
      this.query = res
      person.adopter = this.adopter
      person.adopt = true
      person.typePerson= 'adoptado'
      person.birth = this.query.birth
      
      this.personService.adop(person).subscribe(res=>{
        this.router.navigate(['list-persons'])
      },err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
    
  }

}
