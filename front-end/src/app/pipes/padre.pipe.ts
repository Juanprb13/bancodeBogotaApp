import { Pipe, PipeTransform } from '@angular/core';
import {PersonService} from '../services/person.service'
import { Person } from '../person';

@Pipe({
  name: 'padre',
  
})
export class PadrePipe implements PipeTransform {
  constructor(private personService:PersonService){
    
  }
  padre  
  transform(value: string, ...args: unknown[]): unknown {
    this.getPersonssss(value)
    console.log(this.padre);
    
    return this.padre;
  }
  getPersonssss(id){
    this.personService.getPerson(id).subscribe(res=>  (this.padre = res),err=>{
      console.log(err);
    })
  }
  
}
