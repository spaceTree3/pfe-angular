import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers:new HttpHeaders (
    {'Content-Type':'application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl = 'https://portfolioweb-springboot.onrender.com';

  constructor(private http:HttpClient) { }
  
  //POST 
  addContacto(contacto:Contacto):Observable<Contacto>{
    return this.http.post<Contacto>(`${this.apiUrl}/contacto/crear`,contacto,httpOptions);
  }
  
}
