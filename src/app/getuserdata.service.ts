import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetuserdataService {
  url='https://localhost:7251/api/Employee';
  constructor(private http:HttpClient) { }
  getEmployees():Observable<any> {
    return this.http.get<any>(this.url);
  }
  saveUsers(data:any){
    return this.http.post(this.url,data);
  }

  // public updateemployee(){
  //   return this.http.put(this.url)
  // }
}
