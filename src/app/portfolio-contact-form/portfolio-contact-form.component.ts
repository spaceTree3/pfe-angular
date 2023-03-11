import { Component, ViewChild } from '@angular/core';
import { ContactFormService} from '../service/contact-form.service'; 
import { Validators,FormGroup,FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-portfolio-contact-form',
  templateUrl: './portfolio-contact-form.component.html',
  styleUrls: ['./portfolio-contact-form.component.css']
})
export class PortfolioContactFormComponent {

  @ViewChild('contactForm') contactForm!: NgForm;

  nomYape:string="";
  email:string="";
  mensaje:string="";
  submitMessageOk=false;

  constructor(private contactFormService:ContactFormService) { }

  onSubmit(){
    const {nomYape,email,mensaje}=this;
    const nuevoContacto = {nomYape,email,mensaje};
    this.contactFormService.addContacto(nuevoContacto).subscribe();
    //alert ("Su mensaje ha sido enviado");
    this.submitMessageOk=true;
    this.contactForm.reset()
  }

  onClose(event:any){
    this.contactForm.reset();
  }


}
