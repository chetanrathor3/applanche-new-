import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:4000/'

  insertTeam(data:any){
    console.log(data);
    return this.http.post(`${this.url}addTeam`,data)
  }

  fetchTeams(){
    return this.http.get(`${this.url}teamsList`)
  }

  deleteTeamMember(id:any){
    return this.http.delete(`${this.url}deleteTeamMember`,id)
  }

}
