import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InsertBlogService } from 'src/app/services/insert-blog.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor(private team:InsertBlogService, private router : Router) { }

  ngOnInit(): void {
  }

  addTeam(data:any){
    this.team.insertTeam(data).subscribe((data)=>{
    })
    this.router.navigate(['adminIndex/teamList'])

    
  }

}
