import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Educacion } from '../models/educacion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiUrl = 'https://portfolioweb-springboot.onrender.com';

  constructor(private http:HttpClient) { }

  getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiUrl}/educacion/traer`);
  }

}
