import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Persona } from '../models/persona';
import { LoginService } from '../service/login.service';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-portfolio-bio',
  templateUrl: './portfolio-bio.component.html',
  styleUrls: ['./portfolio-bio.component.css']
})
export class PortfolioBioComponent implements OnInit {
  @Input() persona!: Persona[];
  update:boolean=false;
  isLoggedin:boolean=false;
  telefono!:number;
  email!:string;

  constructor(private personaService:PersonaService, private loginService:LoginService) { }

  ngOnInit(){
    this.isLoggedin=this.loginService.isUserLoggedin();
  }

  editar(){
    this.update=true;
  }

  cambiarTelefono(telefono:number){
    this.persona[0].telefono=telefono;
    this.personaService.editarPersona(this.persona);
    this.update=false;
  }

  cambiarEmail(email:string){
    console.log("email"+this.persona[0].email);
    this.persona[0].email=email;
    this.personaService.editarPersona(this.persona);
    this.update=false;
  }


  cancelar(){
    this.update=false;
    console.log("email"+this.persona[0].email);
  }

  


}
