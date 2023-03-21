import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ContactFormService} from '../service/contact-form.service'; 
import { Validators,FormGroup,FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-portfolio-contact-form',
  templateUrl: './portfolio-contact-form.component.html',
  styleUrls: ['./portfolio-contact-form.component.css']
})
export class PortfolioContactFormComponent implements OnInit{

  @ViewChild('contactForm') contactForm!: NgForm;
  formModal:any;

  nombre:string="";
  apellido:string="";
  email:string="";
  mensaje:string="";
  submitMessageOk=false;

  constructor(private contactFormService:ContactFormService) { }

  onSubmit(){
    const {nombre,apellido,email,mensaje}=this;
    const nuevoContacto = {nombre,apellido,email,mensaje};
    this.contactFormService.addContacto(nuevoContacto).subscribe();
    //alert ("Su mensaje ha sido enviado");
    this.submitMessageOk=true;
    this.contactForm.reset()
  }

  onClose(event:any){
    this.contactForm.reset();
  }

  ngOnInit(){
    console.log("hola");

  }

}
