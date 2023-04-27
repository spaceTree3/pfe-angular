import { Component, OnInit } from '@angular/core';
import { Certificacion } from '../models/certificacion';
import { Educacion } from '../models/educacion';
import { Persona } from '../models/persona';
import { CertificacionService } from '../service/certificacion.service';
import { EducacionService } from '../service/educacion.service';
import { PersonaService } from '../service/persona.service';
import { interval,Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-contenido',
  templateUrl: './portfolio-contenido.component.html',
  styleUrls: ['./portfolio-contenido.component.css']
})
export class PortfolioContenidoComponent implements OnInit {
  
  personas:Persona[]=[];
  educacion:Educacion[]=[];
  certificacion:Certificacion[]=[];

  githubIconPath: string ="../assets/GitHub-Mark-32px.png";
  linkedinIconPath: string ="../assets/linkedin-icon.png";
  profilePicPath: string ="../assets/profile_pic.jpg";

  subscription!:Subscription;

  constructor(
    private personaService:PersonaService,
    private educacionService:EducacionService,
    private certificacionService:CertificacionService
    ) {}

  ngOnInit() {
    this.personaService.getPersona().subscribe(res => {
      this.personas = res;})
    this.certificacionService.getCertificacion().subscribe(res => {
      this.certificacion = res;})
    this.educacionService.getEducacion().subscribe(res => {
      this.educacion = res;})
      }

   getCertificadoBorradoMessage($event:Certificacion){
    this.certificacionService.deleteCertificacion($event.id!).subscribe();
/*     this.certificacionService.getCertificacion().subscribe(res => {
      this.certificacion = res;})
 */  
      const source = interval(2000);
      this.subscription = source.subscribe(val => this.certificacionService.getCertificacion().subscribe(res=>{
        this.certificacion=res;
        this.subscription.unsubscribe();
      }));  
  }

  getCertificadoAgregadoMessage($event:Certificacion){
    this.certificacionService.addCertificacion($event).subscribe();
/*     console.log("termina el agregar")
    this.certificacionService.getCertificacion().subscribe(res => {
      console.log('valor del res',res)
      this.certificacion = res;}) */
    const source = interval(2000);
    this.subscription = source.subscribe(val => this.certificacionService.getCertificacion().subscribe(res=>{
      this.certificacion=res;
      this.subscription.unsubscribe();
    }));

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 }
