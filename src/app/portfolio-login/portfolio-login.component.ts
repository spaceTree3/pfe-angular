import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-portfolio-login',
  templateUrl: './portfolio-login.component.html',
  styleUrls: ['./portfolio-login.component.css']
})
export class PortfolioLoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  usuario:string="";
  password:string="";
  submitLoginOk=false;

  loginInfo!:Persona[];

  constructor(private router:Router,private loginService:LoginService) { }

  onSubmit(){
    const {usuario,password}=this;
    const nuevoLogin = {usuario,password};

    if (this.loginService.authLogin(this.usuario,this.password,this.loginInfo)){
      this.submitLoginOk=true;
    }
  

/*    this.loginService.getLoginInfo().subscribe(res=>{
      console.log(res);
    })
    
    if (this.loginService.authLogin(this.usuario,this.password,this.loginInfo)){
      this.submitLoginOk=true;
    }
  }

      this.loginService.getLoginInfo().subscribe(res=>{
      this.loginInfo=res;
    })
*/
    if (this.submitLoginOk){
      this.router.navigate([''])
      .then(() => {
          window.location.reload();
       });
    }
  }

  onClose(event:any){
    this.loginForm.reset();
  }

  ngOnInit() {
    this.loginService.getLoginInfo().subscribe(res=>{
      this.loginInfo=res;
    })
        
  }
  

}
