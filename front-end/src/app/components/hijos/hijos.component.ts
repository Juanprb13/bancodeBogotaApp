import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service'
import { Person } from 'src/app/person';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.css']
})
export class HijosComponent implements OnInit {

  constructor(private personService : PersonService, private router:Router) { }

  children :Person 
  padre  
  idi= '5f31488a1a3e4b3c90df2ab2'
  ngOnInit(): void {
    this.getPersons()
    this.getPersonssss(this.idi)
  }
  getPersons(){
    this.personService.getchildren().subscribe(res=>{
      this.children = res
    
    },err=>{
      console.log(err);
    })
  }
  getPersonssss(id){
    this.personService.getPerson(id).subscribe(res=>  (this.padre = res),err=>{
      console.log(err);
    })
  }
 
}
