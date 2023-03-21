import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit {
  imagePath: string = "../assets/site_icon.jpg";

  isLoggedin = false;
	
	loggedinUser: string = '';
  

  constructor(private router:Router,private loginService:LoginService, private commonService:CommonService ) { }

  ngOnInit() {
    this.isLoggedin = this.loginService.isUserLoggedin();
		this.loggedinUser = this.loginService.getLoggedinUser();
  }

  onClick(){
    this.router.navigateByUrl('contact-form')
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  }

  doLogout() {
		this.loginService.logout();
    this.isLoggedin = this.loginService.isUserLoggedin();
    this.commonService.sendUpdate(false);
    this.reloadCurrentRoute();
	}


  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  onLogin(){
    this.router.navigateByUrl('/login')
    .then(success => console.log('navigation success?' , success))
    .catch(console.error);

  }
}
