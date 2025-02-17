import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CakeOrder } from '../models/cakeorder';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CakeRequestsService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/requests';

  getAllCakeRequests():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.url}`);
  }
  // This method getAllCakeRequests() sends an HTTP GET request to the specified URL endpoint and expects a response of type Array<Customer>. It uses the HttpClient service's get() method and the template string ${this.url} to dynamically include the URL stored in the url variable.

  saveCakeOrder(customer?:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.url}`, customer);
  }
// This method saveCakeOrder() sends an HTTP POST request to the specified URL endpoint with the customer object as the request payload. It expects a response of type Customer. It uses the HttpClient service's post() method and the template string ${this.url} to dynamically include the URL stored in the url variable.
}
