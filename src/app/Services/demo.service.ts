import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface User{
  id?:number;
  name:string;
  email:string;
}
@Injectable({
  providedIn: 'root'
})

export class DemoService {
private apiurl="vhbgjbngkjbgj";

constructor(private http:HttpClient){}

createUser(user:User):Observable<User>{
  return this.http.post<User>(this.apiurl,user);
}

getAllUser():Observable<User[]>{
  return  this.http.get<User[]>(this.apiurl);
}
getAllUsers(params?:any):Observable<User[]>{
  return  this.http.get<User[]>(this.apiurl,{params});
}

updateUser(id:number, user:User):Observable<User>{
  return this.http.put<User>(`${this.apiurl}/${id}`,user);
}
 deleteUser(id:number):Observable<void>{
  return this.http.delete<void>(`${this.apiurl}/${id}`);
 }



   saveUser(user:any):Observable<any>{
    return this.http.post<User>(this.apiurl, user);
   }

}




  
 