import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service'
import { Person } from 'src/app/person';
import { Router } from "@angular/router";
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(private personService : PersonService, private router:Router) { }

  persons :Person 

  ngOnInit(): void {
    this.getPersons()
  }
  getPersons(){
    this.personService.getPersons().subscribe(res=>{
      this.persons = res
    },err=>{
      console.log(err);
    })
  }
  eleminar(id:string){
    this.personService.eliminarPersona(id).subscribe(res=>{
      this.router.navigate(['list-persons'])
    })
  }
}
