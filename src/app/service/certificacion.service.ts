import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Certificacion } from '../models/certificacion';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders (
    {'Content-Type':'application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  private status:any;

  private apiUrl = 'https://portfolioweb-springboot.onrender.com';

  constructor(private http:HttpClient) { }

  getCertificacion():Observable<Certificacion[]>{
    return this.http.get<Certificacion[]>(`${this.apiUrl}/certificados/traer`);
  }

  deleteCertificacion(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/certificados/borrar/${id}`)
  }

  addCertificacion(certificado:Certificacion):Observable<Certificacion>{
    return this.http.post<Certificacion>(`${this.apiUrl}/certificados/crear`,certificado,httpOptions);
  }


}
