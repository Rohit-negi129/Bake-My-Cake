import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CakeOrder } from '../models/cakeorder';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/cakes';

  getAllCakes():Observable<Array<CakeOrder>>{
    return this.http.get<Array<CakeOrder>>(this.url);
  }

  getCake(id?:string):Observable<CakeOrder>{
    return this.http.get<CakeOrder>(`${this.url}/${id}`);
  }

}
