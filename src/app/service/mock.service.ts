import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http:HttpClient) {}
  getProfile(){
    return this.http.get("https://conduit.productionready.io/api/articles");
  }

}
