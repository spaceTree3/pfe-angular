import { Component, OnInit, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from '../models/persona';
import { CommonService } from '../service/common.service';
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
  private subscripcionLogOut!: Subscription;

  constructor(private personaService:PersonaService, private loginService:LoginService, private commonService:CommonService) {
    
    this.subscripcionLogOut= this.commonService.getUpdate().subscribe
    (message => { 
    this.isLoggedin = message;    
    this.update=message});
    
   }

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
//    console.log("email"+this.persona[0].email);
//    console.log("parametro email:"+email);
    this.persona[0].email=email;
    this.personaService.editarPersona(this.persona);
    this.update=false;
  }

  cancelar(){
    this.update=false;
//    console.log("email"+this.persona[0].email);
  }

  ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscripcionLogOut.unsubscribe();
}

  onLogOut(){
    this.subscripcionLogOut= this.commonService.getUpdate().subscribe
    (message => { //message contains the data sent from service
    this.isLoggedin = message;
    
    this.update=message;
    });
  }

  


}
