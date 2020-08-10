import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Person } from "../person";
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http : HttpClient) { }
  url = 'http://localhost:3000/api'

  getPerson(id:string){
    return this.http.get<Person>(`${this.url}/person-query/${id}`)
  }
  getPersons(){
    return this.http.get<Person>(`${this.url}/person/padre`)
  }
  getchildren(){
    return this.http.get<Person>(`${this.url}/person/adoptado`)
  }
  getPersonsAvailable(){
    return this.http.get<Person>(`${this.url}/person/disponible`)
  }
  eliminarPersona(id:string){
    return this.http.delete<Person>(`${this.url}/person/${id}`)
  }
  agregarPersona(person:Person){
    return this.http.post<Person>(`${this.url}/person`,person)
  }
  adop(person:Person){
    return this.http.put<Person>(`${this.url}/person/${person._id}`,person)
  }
}
