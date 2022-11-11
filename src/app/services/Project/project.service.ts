import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:4000/'

  insertProject(data:any){
    console.log(data);
    return this.http.post(`${this.url}addProject`,data)
  }

  
  fetchProjects(){
    return this.http.get(`${this.url}projectList`)
  }

  deleteProject(id:any){
    console.warn(id);
    
    return this.http.delete(`${this.url}deleteProject`,id)
  }



}
