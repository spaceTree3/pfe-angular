import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Certificacion } from '../models/certificacion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  private apiUrl = 'https://portfolioweb-springboot.onrender.com';

  constructor(private http:HttpClient) { }

  getCertificacion():Observable<Certificacion[]>{
    return this.http.get<Certificacion[]>(`${this.apiUrl}/certificados/traer`);
  }

}
