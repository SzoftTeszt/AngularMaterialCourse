import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/allatok/";
  constructor(private http:HttpClient) { }
  
  get(id?:string){
    if (!id) return this.http.get(this.url);
    return this.http.get(this.url+id);
  }

  update(id:any, body:any){
    return this.http.put(this.url+id,body);
  }

  delete(id:any){
    return this.http.delete(this.url+id);
  }
}
