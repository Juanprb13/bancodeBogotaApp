import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { HttpClientModule } from "@angular/common/http";
import { PersonService } from './services/person.service';
import { AdopcionComponent } from './components/adopcion/adopcion.component';
import { PadreComponent } from './components/padre/padre.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HijosComponent } from './components/hijos/hijos.component';
import { PadrePipe } from './pipes/padre.pipe'
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPersonComponent,
    AdopcionComponent,
    PadreComponent,
    CrearPersonaComponent,
    HijosComponent,
    PadrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
