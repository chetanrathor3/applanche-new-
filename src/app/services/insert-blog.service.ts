import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertBlogService {

url = 'http://localhost:4000/'

  constructor(private http:HttpClient) { }

  
  insertBlog(data:any){
    console.log(data);
    return this.http.post(`${this.url}addBlog`,data)
  }

  fetchBlogs(){
    return this.http.get(`${this.url}blogList`)
  }

  insertProject(data:any){
    console.log(data);
    return this.http.post(`${this.url}addProject`,data)
  }

  insertTeam(data:any){
    console.log(data);
    return this.http.post(`${this.url}addTeam`,data)
  }

  fetchProjects(){
    return this.http.get(`${this.url}projectList`)
  }

 
  fetchTeams(){
    return this.http.get(`${this.url}teamsList`)
  }

  deleteTeamMember(id:any){
    return this.http.delete(`${this.url}deleteTeamMember`,id)
  }
}