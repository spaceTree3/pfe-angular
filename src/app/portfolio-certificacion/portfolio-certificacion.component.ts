import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Certificacion } from '../models/certificacion';
import { CertificacionService } from '../service/certificacion.service';
import { LoginService } from '../service/login.service';
import { CommonService } from '../service/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-portfolio-certificacion',
  templateUrl: './portfolio-certificacion.component.html',
  styleUrls: ['./portfolio-certificacion.component.css']
})
export class PortfolioCertificacionComponent implements OnInit {

  @Input() certificacion!:Certificacion[];
  @Output() certificadoBorrado=new EventEmitter<Certificacion>();

  update:boolean=false;
  isLoggedin:boolean=false;

  @Output() certificadoAgregado=new EventEmitter<Certificacion>();
  @ViewChild('certificadoForm') certificadoForm!: NgForm;
  agregarCert:boolean=false;
  borrarCert:boolean=false;

//  id:number=0;
  titulo:string="";
  descripcion:string="";
  anio:number=0;
  lugar:string="";
  estado:string="";


  private subscripcionLogOut!: Subscription;

  constructor(private certificacionService:CertificacionService, private loginService:LoginService, private commonService:CommonService) { 
        
    this.subscripcionLogOut= this.commonService.getUpdate().subscribe
    (message => { 
    this.isLoggedin = message;    
    this.update=message});
  }

  ngOnInit(){
    this.isLoggedin=this.loginService.isUserLoggedin();
  }

  borrar(){
    this.update=true;
    this.borrarCert=true;
    this.agregarCert=false;

  }

  agregar(){
    this.update=true;
    this.agregarCert=true;
    this.borrarCert=false;
  }

  borrarCertificado(certificado:Certificacion){
/*     console.log('input del certificacion',this.certificacion)
    let borrado:boolean=false;
    for (var cert of this.certificacion){
      if (cert.id===certificado.id){
        borrado=true;
        this.certificacionService.deleteCertificacion(certificado.id!).subscribe();
        this.certificadoBorrado.emit(borrado);
      }
    }
 */ 
    this.certificadoBorrado.emit(certificado);
    this.update=false;
  }

  onSubmit(){
//    this.id=this.certificacion.length+1;
//    console.log('valor id',this.id)
//    const {id,descripcion,titulo,anio,lugar,estado}=this;
//    const nuevoCertificado ={id,descripcion,titulo,anio,lugar,estado};
    const {descripcion,titulo,anio,lugar,estado}=this;
    const nuevoCertificado ={descripcion,titulo,anio,lugar,estado};

    this.certificadoAgregado.emit(nuevoCertificado);
//    this.contactFormService.addContacto(nuevoContacto).subscribe();
    //alert ("Su mensaje ha sido enviado");
//    this.certificadoForm.reset()
    this.certificadoForm.reset();
    this.update=false;
  }

  onClose($event:any){
    this.agregarCert=false;
    this.certificadoForm.reset();
  }

  cancelar(){
    this.update=false;
//    console.log("email"+this.persona[0].email);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('valor cuando cambia el padre:',this.certificacion)
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
