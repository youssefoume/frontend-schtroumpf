import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
  url="http://localhost:3000/api/schtroumpf";
  registerSchtroumpf(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
  getALlSchtroumpfs():Observable<any> {
    return this.http.get(this.url);
  }
  deleteAmis(id:any,ami:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const options = { headers: headers, body: ami };
    return this.http.delete(this.url+`/amis/${id}`,options);
  }
  addAmis(id:any,ami:any):Observable<any>{
    return this.http.put(this.url+`/amis/${id}`,ami);
  }
  findSchtroumpfById(id:any):Observable<any>{
    return this.http.get(this.url+`/${id}`);
  }
  modifierSchtroumpf(id:any,data:any):Observable<any>{
    return this.http.put(this.url+`/${id}`,data);
  }
  login(value: any) {
    return this.http.post(this.url+'/login', value);
  }
}