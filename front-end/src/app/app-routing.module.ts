import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { AdopcionComponent } from './components/adopcion/adopcion.component';

const routes: Routes = [
  {path:'list-persons',component:ListPersonComponent},
  {path:'',redirectTo:'/list-persons',pathMatch:'full'},
  {path:'crear-persona',component:CrearPersonaComponent},
  {path:'adoptar/:id',component:AdopcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
