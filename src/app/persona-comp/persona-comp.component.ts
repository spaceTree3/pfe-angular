import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-persona-comp',
  templateUrl: './persona-comp.component.html',
  styleUrls: ['./persona-comp.component.css']
})
export class PersonaCompComponent implements OnInit {

  public personas: Persona[]=[];


  constructor(private personaService:PersonaService) { }

  ngOnInit(){
    this.personaService.getPersona().subscribe(res => {
      this.personas = res;})
  }


}
