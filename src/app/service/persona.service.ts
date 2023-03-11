import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Persona } from 'src/app/models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PersonaService {
  private apiUrl = 'https://portfolioweb-springboot.onrender.com';

  constructor(private http:HttpClient) { }

  public getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiUrl}/personas/traer`);  
  }

  public editarPersona(persona:Persona[]){
//    const params=new HttpParams()
  for(let i=0;i<1;i++){
    console.log("datosss")
    console.log(persona[i].email)
    console.log(persona[i].nombre)
  }
  let params = new HttpParams();
  params = params.set('nombre',persona[0].nombre);
  params = params.set('apellido',persona[0].apellido);
  params = params.set('telefono',persona[0].telefono);
  console.log('este es el email:'+persona[0].email.toString());
  params = params.set('email',persona[0].email);;

  console.log('nombre params:'+params.get('nombre'));

//    let fullURL = `${this.apiUrl}/personas/editar/1?${params.toString()}`;
  let fullURL = `${this.apiUrl}/personas/editar/1?nombre=${params.get('nombre')}&apellido=${params.get('apellido')}&email=${params.get('email')}&telefono=${params.get('telefono')}`;

//nombre=Jose&apellido=Martinez&email=josemts99@gmail.com&telefono=5493794628806

  console.log('nombre url'+fullURL);

//this.http.put(`${this.apiUrl}/personas/editar/1`,this.httpOptions);
//this.http.put(`${this.apiUrl}/personas/editar/1?${params.toString()}`,null);
  this.http.put(fullURL,null).subscribe();
    
}

}
