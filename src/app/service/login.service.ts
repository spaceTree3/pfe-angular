import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://portfolioweb-springboot.onrender.com';

  SESSION_KEY = 'auth_user'

	constructor(private http: HttpClient) {}

  public getLoginInfo():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiUrl}/personas/traer`);  
  }

  public authLogin(usuario:string,password:string,login:Persona[]):boolean{
    if(usuario==login[0].usuario && password==login[0].password){
      this.registerInSession(usuario,password);
    }
    return this.isUserLoggedin();
  }
	
	registerInSession(usuario:string, password:string) {
		sessionStorage.setItem(this.SESSION_KEY, usuario);
	}

	logout() {
		sessionStorage.removeItem(this.SESSION_KEY);
	}

	isUserLoggedin():boolean {
		let user = sessionStorage.getItem(this.SESSION_KEY);
		if (user === null) return false
		return true
	}

	getLoggedinUser() {
		let user = sessionStorage.getItem(this.SESSION_KEY)
		if (user === null) return ''
		return user
	}

}
